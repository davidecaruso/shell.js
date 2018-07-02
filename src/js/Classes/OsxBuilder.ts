import {DefaultBuilder} from "./";
import {strPad} from "../util";
import {CommandParams} from "../Interfaces/";

export class OsxBuilder extends DefaultBuilder {
    protected readonly columns: number = 80;
    protected readonly rows: number = 24;

    addStatusBar(): void {
        this.shell.statusBar = `(.status-bar>` +
            `(.buttons>(button.icon-close.icon-dot+button.icon-minimize+button.icon-enlarge))+` +
            `(.title>{${this.user} ‒ sh ‒ ${this.columns + "x" + this.rows}})` +
        `)`;
    }

    protected getPrefix(): string {
        return `(span.prefix>(` +
            `span.host{${this.options.host}}+` +
            `span.colon{:}+` +
            `span.path{${this.options.path}}+` +
            `span.user{ ${this.user}}+` +
            `span.char{${this.char}}` +
        `))`;
    }

    protected login(counter: number): CommandParams {
        let date = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let hours = strPad(date.getHours().toString(), 2, "STR_PAD_LEFT");
        let minutes = strPad(date.getMinutes().toString(), 2, "STR_PAD_LEFT");
        let seconds = strPad(date.getSeconds().toString(), 2, "STR_PAD_LEFT");

        return {
            command: `Last login: ${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
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
