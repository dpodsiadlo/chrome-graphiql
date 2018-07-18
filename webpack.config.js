const path = require('path');
const {readdirSync, realpathSync} = require('fs')

const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')


const resolveApp = relativePath => path.resolve(realpathSync(process.cwd()), relativePath)

const paths = {
    appBuild: resolveApp('dist'),
    appSrc: resolveApp('src'),
}

const pkg = require('./package')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'source-map' : false,
    entry: {
        editor: './src/views/editor/editor.js',
        options: './src/views/options/options.js',
        popup: './src/views/popup/popup.js',
        vendors: Object.keys(pkg.dependencies),
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: paths.appBuild,
    },
    resolve: {
        modules: ['node_modules'],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                oneOf: [
                    {test: /\.flow$/, loader: 'ignore-loader'},
                    {
                        test: /\.(js|jsx|mjs|flow)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            presets: [
                                "react-app"
                            ]
                        },
                    },
                    {
                        test: /\.css$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {},
                            },
                        ],
                    }
                ]
            },

        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/assets', to: ''}
        ]),
    ],
    optimization: {
        nodeEnv: 'production',
        splitChunks: {
            name: 'vendors',
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    name: 'vendors',
                    test: 'vendors',
                    enforce: true
                },
            }
        }
    }
}
