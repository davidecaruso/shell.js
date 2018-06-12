import {DefaultBuilder} from "./";
import {strPad} from "../util";
import {CommandParams} from "../Interfaces/";

export class OsxBuilder extends DefaultBuilder {
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
            `span.user{ ${this.user}}+` +
            `span.char{${this.char}}` +
        `))`;
    }

    additionalLine(): CommandParams {
        let date = new Date();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let hours = strPad(date.getHours().toString(), 2, "STR_PAD_LEFT");
        let minutes = strPad(date.getMinutes().toString(), 2, "STR_PAD_LEFT");
        let seconds = strPad(date.getSeconds().toString(), 2, "STR_PAD_LEFT");

        return {
            command: `Last login: ${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
            output: true,
            prefix: false
        }
    }
}
