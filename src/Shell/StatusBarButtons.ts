import { ShellElement, StatusBar } from './index'

export class StatusBarButtons implements ShellElement {
    protected content: string

    /**
     * StatusBarButtons constructor.
     * @param {string} content The content.
     *
     * @return {void}
     */
    constructor(content: string) {
        this.content = content
    }

    /**
     * Get StatusBarButtons in string format.
     * @return {string}
     */
    public toString(): string {
        return `<div class="${StatusBar.IDENTIFIER}__buttons">${this.content}</div>`
    }
}
