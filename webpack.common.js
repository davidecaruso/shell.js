// Environment
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const root = path.resolve(__dirname);
const source = 'src';
const destination = 'lib';
const pkg = require(`${root}/package`);

// Library
const library = 'Shell';
const libraryLowercase = library.toLowerCase();

const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;
console.log( `${source}/js/${libraryLowercase}.ts`);
// Export Webpack config
module.exports = {
    // devtool: 'nosources-source-map',
    entry: [
        `${path.join(__dirname, source)}/sass/${libraryLowercase}.scss`,
        `${path.join(__dirname, source)}/js/${libraryLowercase}.ts`
    ],
    output: {
        path: path.join(__dirname, destination),
        filename: `${destination}/shell.js`,
        library,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader',
            }, {
                test: /\.scss$/,
                use: [
                    'universal-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        }),
        new webpack.BannerPlugin(banner)
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};
