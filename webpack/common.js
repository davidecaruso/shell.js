// Environment
const path = require('path');
const root = path.join(__dirname, '../');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const source = '../src';
const destination = '../lib';
const pkg = require(`${root}/package`);

// Library
const library = 'Shell';
const bundle = library.toLowerCase();
const entry = {};
entry[bundle] = [
    `${path.join(__dirname, source)}/sass/${bundle}.scss`,
    `${path.join(__dirname, source)}/js/${bundle}.ts`
];

const banner = `${pkg.name} - ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
URL: ${pkg.homepage}
License(s): ${pkg.license}`;

// Export Webpack config
module.exports = {
    banner,
    config: {
        devtool: 'nosources-source-map',
        entry,
        output: {
            path: path.join(__dirname, destination),
            filename: `[name].js`,
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
            })
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
    }
};
