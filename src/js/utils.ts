enum PadType {
    STR_PAD_BOTH,
    STR_PAD_LEFT,
    STR_PAD_RIGHT
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
function strPad(input: string, length: number, string: string, type: PadType = PadType.STR_PAD_RIGHT): string {
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
function arrDiff(a1: any[], a2: any[]): any[] {
    let a = [], diff = [];

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (let k in a) {
        diff.push(k);
    }

    return diff;
}

/**
 * Query selector wrapper
 * @param {string}     selector CSS selector.
 * @param {ParentNode} parent   Parent element where to search in.
 * @returns {NodeListOf<Element>}     HTML object.
 */
function $(selector: string, parent: ParentNode = document): NodeListOf<Element> {
    return parent.querySelectorAll(selector);
}

export {
    $, arrDiff, strPad
}