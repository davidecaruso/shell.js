export class Shell {
    private _statusBar: string;
    private _content: string;

    /**
     * Set statusBar value.
     * @param value
     */
    set statusBar(value) {
        this._statusBar = value;
    }

    /**
     * Set content value.
     * @param {string} value
     */
    set content(value: string) {
        this._content = value;
    }

    /**
     * Get Shell in string format.
     * @returns {string}
     */
    public toString(): string {
        return this._statusBar + this._content;
    }
}
