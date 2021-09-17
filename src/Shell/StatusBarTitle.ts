import { ShellElement, StatusBar } from './index'

export class StatusBarTitle implements ShellElement {
    protected content: string

    /**
     * StatusBarTitle constructor.
     * @param {string} content The content.
     *
     * @return {void}
     */
    constructor(content: string) {
        this.content = content
    }

    /**
     * Get StatusBarTitle in string format.
     * @return {string}
     */
    public toString(): string {
        return `<div class="${StatusBar.IDENTIFIER}__title">${this.content}</div>`
    }
}
