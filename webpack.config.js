const webpack = require('webpack');
const pkg = require('./package');
const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

module.exports = (env, options) => {
    let config;
    let bannerPlugin = new webpack.BannerPlugin(banner);
    switch (env) {
        case 'production':
            config = require('./webpack/prod');
            config.plugins.push(bannerPlugin);
            break;
        case 'development':
        default:
            config = require('./webpack/dev');
            config.plugins.push(bannerPlugin);
            break;
    }

    return config;
};
