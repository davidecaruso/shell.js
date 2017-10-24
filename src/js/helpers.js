/**
 * Helpers
 * Class of static utility methods
 */
module.exports = class Helpers {
    static str_pad(input, padLength, padString, padType = 'STR_PAD_RIGHT') {
        let half = '';
        let padToGo;
        let _strPadRepeater = (s, len) => {
            let collect = '';
            while (collect.length < len) collect += s;
            collect = collect.substr(0, len);
            return collect
        };
        input += '';
        if ((padToGo = padLength - input.length) > 0) {
            switch (padType) {
                case 'STR_PAD_LEFT':
                    input = _strPadRepeater(padString, padToGo) + input;
                    break;

                case 'STR_PAD_BOTH':
                    half = _strPadRepeater(padString, Math.ceil(padToGo / 2));
                    input = half + input + half;
                    input = input.substr(0, padLength);
                    break;

                default:
                    input = input + _strPadRepeater(padString, padToGo);
                    break;
            }
        }
        return input
    }
};