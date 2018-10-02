import {CommandParams, Options} from "../Interfaces/";
import {BuilderInterface} from "./BuilderInterface";
import {Shell} from "./Shell";

export class DefaultBuilder implements BuilderInterface {
    protected readonly _char: string = "$";
    protected readonly cursor: string = "&nbsp;";
    protected shell: Shell;
    protected options: Options;

    constructor(o: Options) {
        this.options = o;
    }

    get char(): string {
        return this.options.root ? "#" : this._char;
    }

    get user(): string {
        return this.options.root ? "root" : this.options.user;
    }

    addStatusBar(): this {
        this.shell.statusBar = `(.shell__status-bar>` +
            `(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${this.user}@${this.options.host}: ${this.options.path}})` +
            `)`;

        return this;
    }

    addContent(): this {
        let content = "(.content>(";
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

                // To concatenate lines
                if (counter > 0) {
                    content += "+";
                }

                // Build line
                content += this.buildLine(params);

                // If command contains "sudo" become root user
                if (/sudo/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = this.sudo(params);
                    content += "+" + this.buildLine(params);
                }

                // If command contains "exit" logout from root
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    params = this.logout(params);
                    content += "+" + this.buildLine(params);
                }
                counter++;
            });
            content += "+" + this.buildLine({counter, empty: true});
        }
        content += "))";
        this.shell.content = content;

        return this;
    }

    /**
     * Build the HTML structure of a single terminal line.
     */
    private buildLine(params: CommandParams): string {
        let line = "(";
        let classes = [`line`, `line-${params.counter}`];

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
            classes.push("root");
        } else {
            let idx = classes.indexOf("root");
            if (idx != -1) {
                classes = classes.splice(idx, 1);
            }
        }

        if (params.empty) {
            // Add "active" class
            if (!this.options.typed) {
                classes.push("active");
            }
            line += `.${classes.join(".")}>(${this.getPrefix()}+span.command>span.typed-cursor{${this.cursor}})`;
        } else {
            line += `.${classes.join(".")}>(`;
            if (params.command) {
                line += (params.output ? "" : this.getPrefix() + "+") +
                    `span.command${(params.output ? ".output" : "")}>{ ${params.command}}`;
            }
            line += ")";
        }
        line += ")";

        return line;
    }

    protected getPrefix(): string {
        return `(span.prefix>(` +
            `span.user{${this.user}@}+` +
            `span.host{${this.options.host}}+` +
            `span.colon{:}+` +
            `span.path{${this.options.path}}+` +
            `span.char{${this.char}}` +
            `))`;
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
        return "";
    }
}
