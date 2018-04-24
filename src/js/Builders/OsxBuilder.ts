import {DefaultBuilder} from "./DefaultBuilder";

export class OsxBuilder extends DefaultBuilder {
    protected readonly _char: string = "$";
    protected readonly cursor: string = "&nbsp;";

    addStatusBar(): void {
        this.shell.statusBar = `(.status-bar>` +
            `(.buttons>(button.icon-close.icon-dot+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${this.user} ‒ sh ‒ 80x24})` +
        `)`;
    }

    getPrefix(): string {
        return `(span.prefix>(` +
            `span.host{${this.options.host}}+` +
            `span.colon{:}+` +
            `span.path{${this.options.path}}+` +
            `span.user{&nbsp;${this.user}}+` +
            `span.char{${this.char}}` +
        `))`;
    }
}
