import {DefaultBuilder} from "./";
import {CommandParams, Options} from "../Interfaces/";

export class WindowsBuilder extends DefaultBuilder {
    protected readonly _char: string = "&gt;";

    constructor(o: Options) {
        super(o);
        if (this.options.path === "~") {
            this.options.path = "C:\\Windows\\system32\\";
        }
    }

    addStatusBar(): this {
        this.shell.statusBar = `(.shell__status-bar>(` +
            `(.buttons>(button.icon-minimize+button.icon-enlarge+button.icon-close))+` +
            `(.icon>i.icon-command)+` +
            `(.title>{Command Prompt})` +
        `))`;

        return this;
    }

    protected getPrefix(): string {
        return `(span.prefix>(` +
            `span.path{${this.options.path}}+` +
            `span.char{${this.char}}` +
        `))`;
    }

    protected sudo(params: CommandParams): CommandParams {
        params = super.sudo(params);
        this.options.root = false;
        params.command = `bash: sudo: command not found`;
        return params
    }

    protected logout(params: CommandParams): CommandParams {
        params = super.sudo(params);
        this.options.root = false;
        params.command = `bash: exit: command not found`;
        return params
    }
}
