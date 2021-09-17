import { ShellElement, StatusBar } from './index'

export class StatusBarIcon implements ShellElement {
    protected content: string

    /**
     * StatusBarIcon constructor.
     * @param {string} content The content.
     *
     * @return {void}
     */
    constructor(content: string) {
        this.content = content
    }

    /**
     * Get StatusBarIcon in string format.
     * @return {string}
     */
    public toString(): string {
        return `<div class="${StatusBar.IDENTIFIER}__icon">${this.content}</div>`
    }
}
