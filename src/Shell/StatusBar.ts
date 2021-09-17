import { Shell, ShellElement } from './index'

export class StatusBar implements ShellElement {
    static readonly IDENTIFIER = 'status-bar'
    protected elements: ShellElement[]

    /**
     * StatusBar constructor.
     * @param {ShellElement[]} elements The inner elements..
     *
     * @return {void}
     */
    constructor(...elements: ShellElement[]) {
        this.elements = elements
    }

    /**
     * Get StatusBar in string format.
     * @return {string}
     */
    public toString(): string {
        let content = `<div class="${Shell.IDENTIFIER}__${StatusBar.IDENTIFIER}">`
        this.elements.forEach(el => {
            content += el.toString()
        })
        content += `</div>`
        return content
    }
}
