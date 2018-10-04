import {defaultClassName} from "../Helpers";
import {BuilderInterface} from "./BuilderInterface";
import {CommandParams, Options} from "../Interfaces/";
import {Shell, StatusBar, StatusBarTitle, StatusBarButtons, Content} from "../Shell";

export class DefaultBuilder implements BuilderInterface {
    protected readonly _char: string = "$";
    protected readonly cursor: string = "&nbsp;";
    protected shell: Shell;
    protected options: Options;

    constructor(o: Options) {
        this.options = o;
        this.shell = new Shell(o);
    }

    get char(): string {
        return this.options.root ? "#" : this._char;
    }

    get user(): string {
        return this.options.root ? "root" : this.options.user;
    }

    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--close"><i class="icon-close"></i></button>` +
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>`
        );
        let title = new StatusBarTitle(`${this.user}@${this.options.host}: ${this.options.path}`);

        this.shell.statusBar = new StatusBar(buttons, title);

        return this;
    }

    addContent(): this {
        let content = "";
        let counter = 0;

        let loginParams = this.login(counter);

        if (Object.keys(loginParams).length) {
            content += this.buildLine(loginParams);
            counter++;
        }

        // If have some commands...
        if (this.options.commands.length) {
            this.options.commands.forEach(command => {
                let params: CommandParams = {
                    command,
                    counter,
                    output: null
                };

                // Build line
                content += this.buildLine(params);

                // If command contains "sudo" become root user
                if (/sudo/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = this.sudo(params);
                    content += this.buildLine(params);
                }

                // If command contains "exit" logout from root
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = this.logout(params);
                    content += this.buildLine(params);
                }
                counter++;
            });
            content += this.buildLine({counter, empty: true});
        }

        this.shell.content = new Content(content);

        return this;
    }

    /**
     * Build the HTML structure of a single terminal line.
     */
    private buildLine(params: CommandParams): string {
        let classes = [`line`];
        let counter = params.counter;

        // Default parameters
        params = {
            ...{
                counter: 0,
                empty: false,
                command: null,
                output: false
            },
            ...params
        };

        // Add/remove "root" class
        if (this.options.root) {
            classes.push(`line--root`);
        } else {
            let idx = classes.indexOf(`line--root`);
            if (idx != -1) {
                classes = classes.splice(idx, 1);
            }
        }

        let line = `<div class="${classes.join(" ")}" data-index="${counter}">`;

        if (params.empty) {
            // Add "active" class
            if (!this.options.typed) {
                classes.push(`line--active`);
            }
            line += `${this.getPrefix()}` +
                `<span class="command"><span class="${defaultClassName}__typed-cursor">${this.cursor}</span></span>`;
        } else {
            if (params.command) {
                line += (params.output ? "" : this.getPrefix()) +
                    `<span class="command` + (params.output ? ` line--output` : "") + `">` +
                    `${params.command}</span>`;
            }
        }
        line += "</div>";

        return line;
    }

    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="user">${this.user}@</span>` +
            `<span class="host">${this.options.host}</span>` +
            `<span class="colon">:</span>` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="char">${this.char}</span>` +
        `</span>`;
    }

    protected sudo(params: CommandParams): CommandParams {
        this.options.root = true;
        params.command = `[sudo] password for ${this.options.user}:`;
        params.output = true;
        return params;
    }

    protected logout(params: CommandParams): CommandParams {
        this.options.root = false;
        params.command = "logout";
        params.output = true;
        return params;
    }

    protected login(counter: number): CommandParams {
        return {};
    }

    build(): string {
        return this.shell.toString();
    }
}
