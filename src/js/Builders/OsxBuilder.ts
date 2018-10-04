import {DefaultBuilder} from "./";
import {CommandParams} from "../Interfaces/";
import {defaultClassName, strPad} from "../Helpers";
import {StatusBar} from "../Shell";
import {StatusBarButtons} from "../Shell/StatusBarButtons";
import {StatusBarTitle} from "../Shell/StatusBarTitle";

export class OsxBuilder extends DefaultBuilder {
    protected readonly columns: number = 80;
    protected readonly rows: number = 24;

    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--close"><i class="icon-dot"></i></button>` +
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>`
        );
        let title = new StatusBarTitle(`${this.user} ‒ sh ‒ ${this.columns + "x" + this.rows}`);

        this.shell.statusBar = new StatusBar(buttons, title);

        return this;
    }

    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="host">${this.options.host}</span>` +
            `<span class="colon">:</span>` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="user"> ${this.user}</span>` +
            `<span class="char">${this.char}</span>` +
        `</span>`;
    }

    protected login(counter: number): CommandParams {
        let date = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let hours = strPad(date.getHours().toString(), 2, "STR_PAD_LEFT");
        let minutes = strPad(date.getMinutes().toString(), 2, "STR_PAD_LEFT");
        let seconds = strPad(date.getSeconds().toString(), 2, "STR_PAD_LEFT");

        return {
            command: `Last login: ` +
                `${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
            output: true,
            counter
        }
    }

    protected sudo(params: CommandParams): CommandParams {
        params = super.sudo(params);
        params.command = `Password: <span class="icon-key"></span>`;
        return params
    }
}
