const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const jspth = "./client_setup/_index/";

module.exports = {
    entry: glob.sync(jspth + "*.js").reduce((acc, item) => {
        const path = item.split("/");
        const name = path[path.length - 1].split(".")[0];
        acc[name] = item;
        return acc;
    }, {}),
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanOnceBeforeBuildPatterns: ["public/javascripts", "public/stylesheets"],
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../stylesheets/[name].css",
            // chunkFilename: "[id].css"
        }),
    ],
    output: {
        filename: "[name].js",
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, "public/javascripts"),
    },
    optimization: {
        // splitChunks: {
        //   chunks: 'all'
        // }

        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },

        // splitChunks: {
        //   cacheGroups: {
        //     commons: {
        //       name: 'commons',
        //       chunks: 'initial',
        //       minChunks: 2
        //     }
        //   }
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sass|scss|css)$/, //Check for sass or scss file names
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: "./public/stylesheets",
                        },
                    },
                    // 'style-loader',
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" },
            },
        ],
    },
};
