import {ShellElement} from "./ShellElement";

export class StatusBarButtons implements ShellElement {
    protected elements: string;

    constructor(elements: string) {
        this.elements = elements;
    }

    /**
     * Get StatusBarButtons in string format.
     * @returns {string}
     */
    public toString(): string {
        return `<div class="status-bar__buttons">${this.elements}</div>`;
    }
}
