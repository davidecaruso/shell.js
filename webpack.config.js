const webpack = require('webpack');
const pkg = require('./package');
const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

module.exports = (env, options) => {
    let config;
    switch (options.mode) {
        case 'production':
            config = require('./webpack/prod');
            break;
        case 'development':
        default:
            config = require('./webpack/dev');
            break;
    }
    config.plugins.push(new webpack.BannerPlugin(banner));
    return config;
};
