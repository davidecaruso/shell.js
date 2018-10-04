import {ShellElement} from "./ShellElement";

export class StatusBarTitle implements ShellElement {
    protected content: string;

    constructor(content: string) {
        this.content = content;
    }

    /**
     * Get StatusBarTitle in string format.
     * @returns {string}
     */
    public toString(): string {
        return `<div class="status-bar__title">${this.content}</div>`;
    }
}
