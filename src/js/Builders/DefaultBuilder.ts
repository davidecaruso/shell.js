import {Builder} from "./Builder";
import {expand} from "../utils";
import {Options} from "../Interfaces";
import {Shell} from "../Shell";

export class DefaultBuilder implements Builder {
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

    create(): void {
        this.shell = new Shell;
    }

    get(): string {
        if(this.constructor.toString().indexOf("Windows") >= 0) {

        }
        return expand(this.shell.toString());
    }

    addStatusBar(): void {
        this.shell.statusBar = `(.status-bar>` +
            `(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${this.user}@${this.options.host}: ${this.options.path}})` +
            `)`;
    }

    addContent(): void {
        let content = "(.content>(";
        let counter = 0;
        // If have some commands...
        if (this.options.commands.length) {
            this.options.commands.forEach(command => {
                let params = {
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
                    params.command = `[sudo] password for ${this.options.user}:`;
                    params.output = true;
                    this.options.root = true;
                    content += "+" + this.buildLine(params);
                }

                // If command contains "exit" logout from root
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    this.options.root = false;
                    params.command = "logout";
                    params.output = true;
                    content += "+" + this.buildLine(params);
                }
                counter++;
            });
            content += "+" + this.buildLine({counter, empty: true});
        }
        content += "))";
        this.shell.content = content;
    }

    /**
     * Build the HTML structure of a single terminal line.
     */
    private buildLine(params): string {
        let line = "(";
        let classes = ["line", `line-${params.counter}`];

        // Default parameters
        params = {
            ...{
                counter: 0,
                empty: false,
                command: null,
                prefix: true,
                output: false
            },
            ...params
        };

        // Add "root" class
        if (this.options.root) {
            classes.push("root");
        }

        if (params.empty) {
            // Add "active" class
            if (!this.options.typed) {
                classes.push("active");
            }
            line += `.${classes.join(".")}>(span.command>span.typed-cursor{${this.cursor}})`;
        } else {
            line += `.${classes.join(".")}>(`;
            if (params.command) {
                line += (params.prefix ? this.getPrefix() + "+" : "") +
                    `span.command${(params.output ? ".output" : "")}>{&nbsp;${params.command}}`;
            }
            line += ")"
        }
        line += ")";

        return line;
    }

    getPrefix(): string {
        return `(span.prefix>(` +
            `span.user{${this.user}@}+` +
            `span.host{${this.options.host}}+` +
            `span.colon{:}+` +
            `span.path{${this.options.path}}+` +
            `span.char{${this.char}}` +
        `))`;
    }
}
