const merge = require('webpack-merge');
const common = require('./common');
const mode = 'development';

module.exports = merge(common, {
    devServer: {
        contentBase: './'
    },
    mode
});
