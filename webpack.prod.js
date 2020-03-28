const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const { GenerateSW, InjectManifest } = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    output: {
                        comments: false,
                    },
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        // new webpack.optimize.AggressiveMergingPlugin(),
        new GenerateSW({
            // @see {@link https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config}
            swDest: "service-worker.js",
            // include: [/\.html$/, /\.js$/],
            // include: ['vendors.js']
        }),
    ],
});
