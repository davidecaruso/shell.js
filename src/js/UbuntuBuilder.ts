import {expand} from '@emmetio/expand-abbreviation';
import {Builder, Options} from "./Interfaces";

export class UbuntuBuilder implements Builder {
    private char: string = '$';
    private html: string = "";
    private options: Options;

    constructor(o: Options) {
        this.options = o;
    }

    addContent(): void {
        // Content's HTML wrapper
        let content = '<div class="content">';
        let index = 0;
        let counter = 0;
        // If have some commands...
        if (this.options.commands.length) {
            this.options.commands.forEach(command => {
                let params = {
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
                    params.command = `[sudo] password for ${this.options.user}:`;
                    params.output = true;
                    this.options.root = true;
                    content += this.buildLine(params);
                }

                // If command contains "exit" logout from root
                if (/exit/.test(command)) {
                    counter++;
                    params.counter = counter;
                    this.options.root = false;
                    params.command = 'logout';
                    params.output = true;
                    content += this.buildLine(params);
                }
                counter++;
                index++;
            });
            content += this.buildLine({counter, empty: true});
        }

    }

    addStatusBar(): void {
        let user = this.options.root ? 'root' : this.options.user;
        this.html += expand(`.status-bar>` +
            `(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${user}@${this.options.host}: ${this.options.path}})`);
    }

    get(): string {
        return this.html;
    }

    getPrefix(): string {
        let user = this.options.root ? 'root' : this.options.user;
        let char = this.options.root ? "#" : this.char;
        return `span.user{${user}@}+` +
            `span.host{${this.options.host}}+` +
            `span.colon{:}+` +
            `span.path{${this.options.path}}+` +
            `span.char{${char}}`;
    }

    /**
     * Build the HTML structure of a single terminal's line.
     */
    private buildLine(params): string {
        let line = '';

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

        let classes = ['line', `line-${params.counter}`];
        // Add "root" class
        if (this.options.root) {
            classes.push('root');
        }

        if (params.empty) {

            // Add "active" class
            if (!this.options.typed) {
                classes.push('active');
            }
            line = `.${classes.join(' ')}>(span.command>span.typed-cursor{&nbsp;})`;
        } else {
            line = `.${classes.join(' ')}>()`;
            line = `<div class="${classes.join(' ')}">` +
                (params.command ?
                    (params.prefix ? this.getPrefix() : '') +
                    `<span class="command${(params.output ? ' output' : '')}">${params.command}</span>` :
                    '') +
                `</div>`;
        }

        return line;
    }
}
