import {ShellElement} from "./ShellElement";

export class StatusBarIcon implements ShellElement {
    protected content: string;

    constructor(content: string) {
        this.content = content;
    }

    /**
     * Get StatusBarIcon in string format.
     * @returns {string}
     */
    public toString(): string {
        return `<div class="status-bar__icon">${this.content}</div>`;
    }
}
