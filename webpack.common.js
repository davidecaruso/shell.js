const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')
const pkg = require('./package.json')

const assets = path.join(__dirname, 'assets')
const src = path.join(__dirname, 'src')
const lib = path.join(__dirname, 'lib')
const library = 'shell'

module.exports = {
    devtool: 'nosources-source-map',
    entry: {
        [library]: [`${assets}/style/main.scss`, `${src}/index.ts`],
    },
    output: {
        path: lib,
        filename: `[name].js`,
        library,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: `${assets}/fonts/[name].[ext]`,
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()],
            },
        }),
        new (require('webpack').BannerPlugin)(`${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
License: ${pkg.license}
Homepage: ${pkg.homepage}`),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
}
