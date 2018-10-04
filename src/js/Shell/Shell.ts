import {Options} from "../Interfaces";
import {defaultClassName} from "../Helpers";
import {ShellElement, StatusBar, Content} from "./";

export class Shell implements ShellElement {
    protected readonly options: Options;
    protected _statusBar: StatusBar;
    protected _content: Content;

    constructor(o: Options) {
        this.options = o;
    }

    /**
     * Set statusBar value.
     * @param {StatusBar} value
     */
    set statusBar(value: StatusBar) {
        this._statusBar = value;
    }

    /**
     * Set content value.
     * @param {Content} value
     */
    set content(value: Content) {
        this._content = value;
    }

    /**
     * Get Shell in string format.
     * @returns {string}
     */
    public toString(): string {
        return `<div class="${this.classes()}">` +
            this._statusBar.toString() + this._content.toString() +
        `</div>`;
    }

    /**
     * Get HTML classes basing on options.
     * @returns {string}
     */
    protected classes(): string {
        let classes = [defaultClassName];

        if (this.options.style !== "default") {
            classes.push(`${defaultClassName}--${this.options.style}`);
        }

        if (this.options.theme !== "dark") {
            classes.push(`${defaultClassName}--${this.options.theme}`);
        }

        if (this.options.responsive) {
            classes.push(`${defaultClassName}--responsive`);
        }

        if (this.options.typed) {
            classes.push(`${defaultClassName}--typed`);
        }

        return classes.join(" ");
    }
}
