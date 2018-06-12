import {expand as ex} from "@emmetio/expand-abbreviation";
let Subtract = require("array-subtract");

export enum PadType {
    STR_PAD_BOTH = "STR_PAD_BOTH",
    STR_PAD_LEFT = "STR_PAD_LEFT",
    STR_PAD_RIGHT = "STR_PAD_RIGHT"
}

/**
 * Pad a string to a certain length with another string.
 * @param {string|number} input  The input string.
 * @param {number}        length If the value of length is negative, less than, or equal to the length of the
 *                               input string, no padding takes place, and input will be returned.
 * @param {string}        string The string may be truncated if the required number of padding characters
 *                               can't be evenly divided by the pad_string's length.
 * @param {PadType}       type   Optional argument type can be STR_PAD_RIGHT, STR_PAD_LEFT, or STR_PAD_BOTH.
 *                               If type is not specified it is assumed to be STR_PAD_RIGHT.
 * @returns {string}             Returns the padded string.
 */
export function strPad(input: string, length: number, string: string, type: PadType = PadType.STR_PAD_RIGHT): string {
    let half = "";
    let padToGo;
    let repeater = (s: string, len: number): string => {
        let collect = "";
        while (collect.length < len) {
            collect += s;
        }
        collect = collect.substr(0, len);
        return collect;
    };
    if ((padToGo = length - input.length) > 0) {
        switch (type) {
            case PadType.STR_PAD_BOTH:
                half = repeater(string, Math.ceil(padToGo / 2));
                input = half + input + half;
                input = input.substr(0, length);
                break;
            case PadType.STR_PAD_LEFT:
                input = repeater(string, padToGo) + input;
                break;
            case PadType.STR_PAD_RIGHT:
            default:
                input = input + repeater(string, padToGo);
                break;
        }
    }
    return input
}

/**
 * Computes the difference of arrays.
 * @param {any[]} a1 The array to compare from.
 * @param {any[]} a2 An array to compare against.
 * @returns {any[]}  Returns an array containing all the entries from a1 that are not present
 *                   in a2.
 */
export function arrDiff(a1: any[], a2: any[]): any[] {
    return (new Subtract((a, b) => {
        return a === b;
    })).sub(a1, a2);
}

/**
 * Query selector wrapper
 * @param {string}     selector    CSS selector.
 * @param {ParentNode} parent      Parent element where to search in. Default: window.document.
 * @returns {NodeListOf<Element>}  HTML object.
 */
export function $(selector: string, parent: ParentNode = window.document): NodeListOf<Element> {
    return parent.querySelectorAll(selector);
}

/**
 * Expand Emmet source into HTML.
 * @param {string} source
 * @param {boolean} minify
 * @param {Object} options
 * @returns {string}
 */
export function expand(source: string, minify: boolean = true, options?: Object): string {
    // Escape backslashes
    source = source.replace(/\\/g, "\\\\");
    let html = ex(source, options);
    if (minify) {
        html = html.replace(/\n|\r|\t/g, "");
    }
    // Remove double-backslashes
    html = html.replace(/\\\\/g, "\\");
    return html;
}