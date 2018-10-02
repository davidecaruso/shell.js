import {DefaultBuilder} from "./";

export class UbuntuBuilder extends DefaultBuilder {
    addStatusBar(): this {
        this.shell.statusBar = `(.shell__status-bar>` +
            `(.buttons>(button.icon-close+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${this.user}@${this.options.host}: ${this.options.path}})` +
        `)`;

        return this;
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
}
