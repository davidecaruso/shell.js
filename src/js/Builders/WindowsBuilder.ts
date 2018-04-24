import {DefaultBuilder} from "./DefaultBuilder";

export class WindowsBuilder extends DefaultBuilder {
    protected readonly _char: string = "&gt;";
    protected readonly cursor: string = "&nbsp;";

    addStatusBar(): void {
        this.shell.statusBar = `(.status-bar>` +
            `(.buttons>(button.icon-minimize+button.icon-enlarge+button.icon-close))+` +
            `(.icon>i.icon-command)+` +
            `(.title>{Command Prompt})` +
        `)`;
    }

    getPrefix(): string {
        return `(span.prefix>(` +
            `span.path{${this.options.path}}+` +
            `span.char{${this.char}}` +
        `))`;
    }
}
