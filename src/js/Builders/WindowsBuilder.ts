import {DefaultBuilder} from "./";
import {CommandParams, Options} from "../Interfaces/";
import {StatusBar} from "../Shell";
import {defaultClassName} from "../Helpers";
import {StatusBarButtons} from "../Shell/StatusBarButtons";
import {StatusBarTitle} from "../Shell/StatusBarTitle";
import {StatusBarIcon} from "../Shell/StatusBarIcon";

export class WindowsBuilder extends DefaultBuilder {
    protected readonly _char: string = "&gt;";

    constructor(o: Options) {
        super(o);
        if (this.options.path === "~") {
            this.options.path = "C:\\Windows\\system32\\";
        }
    }

    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>` +
            `<button class="button button--close"><i class="icon-close"></i></button>`
        );
        let icon = new StatusBarIcon(`<i class="icon-command"></i>`);
        let title = new StatusBarTitle("Command Prompt");

        this.shell.statusBar = new StatusBar(buttons, icon, title);

        return this;
    }

    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="char">${this.char}</span>` +
        `</span>`;
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
