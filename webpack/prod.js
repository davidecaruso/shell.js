module.exports = require('webpack-merge')(require('./common'), {
    mode: 'production',
    output: { filename: '[name].min.js' },
    optimization: {
        minimize: true,
        minimizer: [new (require('terser-webpack-plugin'))()],
    },
})
