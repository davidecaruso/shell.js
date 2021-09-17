export enum PadType {
    STR_PAD_BOTH = 'STR_PAD_BOTH',
    STR_PAD_LEFT = 'STR_PAD_LEFT',
    STR_PAD_RIGHT = 'STR_PAD_RIGHT'
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
 * @return {string}             Returns the padded string.
 */
export function strPad(input: string, length: number, string: string, type: PadType = PadType.STR_PAD_RIGHT): string {
    let half = ''
    let padToGo
    let repeater = (s: string, len: number): string => {
        let collect = ''
        while (collect.length < len) {
            collect += s
        }
        collect = collect.substr(0, len)
        return collect
    }
    if ((padToGo = length - input.length) > 0) {
        switch (type) {
            case PadType.STR_PAD_BOTH:
                half = repeater(string, Math.ceil(padToGo / 2))
                input = half + input + half
                input = input.substr(0, length)
                break
            case PadType.STR_PAD_LEFT:
                input = repeater(string, padToGo) + input
                break
            case PadType.STR_PAD_RIGHT:
            default:
                input = input + repeater(string, padToGo)
                break
        }
    }
    return input
}

/**
 * Query selector wrapper.
 * @param {string}     selector    CSS selector.
 * @param {ParentNode} parent      Parent element where to search in. Default: window.document.
 *
 * @return {NodeListOf<Element>}  HTML object.
 */
export function $(selector: string, parent: ParentNode = window.document): NodeListOf<Element> {
    return parent.querySelectorAll(selector)
}
