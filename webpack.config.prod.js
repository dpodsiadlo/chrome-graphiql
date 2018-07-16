const webpack = require("webpack")
const commonConfig = require("./webpack.config")

module.exports = {
    ...commonConfig,
    devtool: false,
    plugins: [
        ...commonConfig.plugins,
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         // Disabled because of an issue with Uglify breaking seemingly valid code:
        //         // https://github.com/facebookincubator/create-react-app/issues/2376
        //         // Pending further investigation:
        //         // https://github.com/mishoo/UglifyJS2/issues/2011
        //         comparisons: false,
        //     },
        //     mangle: {
        //         safari10: true,
        //     },
        //     output: {
        //         comments: false,
        //         // Turned on because emoji and regex is not minified properly using default
        //         // https://github.com/facebookincubator/create-react-app/issues/2488
        //         ascii_only: true,
        //     },
        //     sourceMap: false,
        // })
    ],
}
