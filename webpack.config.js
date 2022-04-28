const pkg = require('./package')

module.exports = env => {
    const config = env.production ? require('./webpack/prod') : require('./webpack/dev')
    config.plugins.push(
        new (require('webpack').BannerPlugin)(`${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
License: ${pkg.license}
Homepage: ${pkg.homepage}`)
    )
    return config
}
