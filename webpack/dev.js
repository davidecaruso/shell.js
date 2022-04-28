module.exports = require('webpack-merge')(require('./common'), {
    mode: 'development',
    devServer: { contentBase: './' },
})
