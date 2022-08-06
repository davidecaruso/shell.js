module.exports = require('webpack-merge')(require('./webpack.common'), {
    mode: 'development',
    devServer: { contentBase: './' },
})
