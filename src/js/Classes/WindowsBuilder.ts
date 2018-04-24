import {DefaultBuilder} from "./";

export class WindowsBuilder extends DefaultBuilder {
    protected readonly _char: string = "&gt;";

    addStatusBar(): void {
        this.shell.statusBar = `(.status-bar>(` +
            `(.buttons>(button.icon-minimize+button.icon-enlarge+button.icon-close))+` +
            `(.icon>i.icon-command)+` +
            `(.title>{Command Prompt})` +
        `))`;
    }

    getPrefix(): string {
        return `(span.prefix>(` +
            `span.path{${this.options.path}}+` +
            `span.char{${this.char}}` +
        `))`;
    }
}
