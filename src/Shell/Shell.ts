import { Options } from '../Interfaces'
import { Content, ShellElement, StatusBar } from './index'

export class Shell implements ShellElement {
    static readonly IDENTIFIER = 'shell'
    protected readonly options: Options
    protected _statusBar: StatusBar

    /**
     * Set statusBar value.
     * @param {StatusBar} value
     */
    set statusBar(value: StatusBar) {
        this._statusBar = value
    }

    protected _content: Content

    /**
     * Set content value.
     * @param {Content} value
     */
    set content(value: Content) {
        this._content = value
    }

    /**
     * Get HTML classes basing on options.
     * @return {string[]}
     */
    get classes(): string[] {
        let classes = [Shell.IDENTIFIER]

        if (this.options.style !== 'default') {
            classes.push(`${Shell.IDENTIFIER}--${this.options.style}`)
        }

        if (this.options.theme !== 'dark') {
            classes.push(`${Shell.IDENTIFIER}--${this.options.theme}`)
        }

        if (this.options.responsive) {
            classes.push(`${Shell.IDENTIFIER}--responsive`)
        }

        if (this.options.typed && typeof this.options.typed === 'function') {
            classes.push(`${Shell.IDENTIFIER}--typed`)
        }

        return classes
    }

    /**
     * Shell constructor.
     * @param {Options} options Object of options.
     *
     * @return {void}
     */
    constructor(options: Options) {
        this.options = options
    }

    /**
     * Get Shell in string format.
     * @return {string}
     */
    public toString(): string {
        return this._statusBar.toString() + this._content.toString()
    }
}
