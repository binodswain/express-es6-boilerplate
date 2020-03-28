const common = require("./webpack.common.js");
const merge = require("webpack-merge");

module.exports = merge(common, {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ["/node_modules/"],
    },
    mode: "development",
});
