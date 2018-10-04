import {defaultClassName} from "../Helpers";
import {ShellElement} from "./ShellElement";

export class Content implements ShellElement {
    protected _inner: string;

    constructor(inner: string) {
        this._inner = `<div class="${defaultClassName}__content">${inner}</div>`;
    }

    /**
     * Get StatusBar in string format.
     * @returns {string}
     */
    public toString(): string {
        return this._inner;
    }
}
