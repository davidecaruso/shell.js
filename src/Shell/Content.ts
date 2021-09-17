import { Shell, ShellElement } from './index'

export class Content implements ShellElement {
    protected content: string

    /**
     * Content constructor.
     * @param {string} content The content.
     *
     * @return {void}
     */
    constructor(content: string) {
        this.content = content
    }

    /**
     * Get Shell content in string format.
     * @return {string}
     */
    public toString(): string {
        return `<div class="${Shell.IDENTIFIER}__content">${this.content}</div>`
    }
}
