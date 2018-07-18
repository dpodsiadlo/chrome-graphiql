const path = require('path');
const {readdirSync, realpathSync} = require('fs')
const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')

const pkg = require('./package.json')
const appDirectory = realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
    appBuild: resolveApp('dist'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveApp('src/setupTests.js'),
    appNodeModules: resolveApp('node_modules')
}


const getViews = () => readdirSync(path.resolve(__dirname, 'src/views')).reduce((entries, dir) => ({
    ...entries,
    [dir]: ['.js', '.html'].map(ext => `./src/views/${dir}/${dir}${ext}`)
}), {})

module.exports = {
    devtool: "source-map",
    entry: {
        ...getViews(),
        vendors: Object.keys(pkg.dependencies),
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: paths.appBuild,
    },
    resolve: {
        // This allows you to set a fallback for where Webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        // https://github.com/facebookincubator/create-react-app/issues/253
        modules: ['node_modules'],
        // These are the reasonable defaults supported by the Node ecosystem.
        // We also include JSX as a common component filename extension to support
        // some tools, although we do not recommend using it, see:
        // https://github.com/facebookincubator/create-react-app/issues/290
        // `web` extension prefixes have been added for better support
        // for React Native Web.
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {

            // Support React Native Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web',
        },
        plugins: [
            // Prevents users from importing files from outside of src/ (or node_modules/).
            // This often causes confusion because we only process files within src/ with babel.
            // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
            // please link the files into your node_modules/ and let module-resolution kick in.
            // Make sure your source files are compiled, as they will not be processed in any way.
            new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
        ],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|mjs|flow)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            compact: true,
                        },
                    },
                    {
                        test: /\.html$/,
                        include: paths.appSrc,
                        loader: require.resolve('file-loader'),
                        options: {
                            name: "[name].html",
                            compact: true,
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
            { test: /\.flow$/, loader: 'ignore-loader' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/assets', to: ''}
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        }),
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
}
