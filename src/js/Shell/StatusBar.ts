import {defaultClassName} from "../Helpers";
import {ShellElement} from "./ShellElement";

export class StatusBar implements ShellElement {
    protected elements: ShellElement[];

    constructor(...elements: ShellElement[]) {
        this.elements = elements;
    }

    /**
     * Get StatusBar in string format.
     * @returns {string}
     */
    public toString(): string {
        let content = `<div class="${defaultClassName}__status-bar">`;
        this.elements.forEach(el => {
            content += el.toString();
        });
        content += `</div>`;
        return content;
    }
}
