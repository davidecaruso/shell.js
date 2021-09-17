const webpack = require('webpack');
const pkg = require('./package');
const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

module.exports = (env, options) => {
    let bannerPlugin = new webpack.BannerPlugin(banner);
    const config = env.production ? require('./webpack/prod') : require('./webpack/dev');

    config.plugins.push(bannerPlugin);
    return config;
};
