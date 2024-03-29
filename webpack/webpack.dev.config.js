const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    target: "web",
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"],
            },
        ],
    },
    devServer: {
        contentBase: common.externals.paths.src,
        historyApiFallback: true,
        open: true,
        compress: true,
        // host: "192.168.100.47",
        port: 7373,
        // proxy: {
        //     "/api/**": {
        //         target: "192.168.100.47:8000",
        //         secure: false,
        //         changeOrigin: true,
        //     },
        // },

        overlay: {
            warnings: false,
            errors: true,
        },
    },
});
