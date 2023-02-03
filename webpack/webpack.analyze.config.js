const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    target: 'browserslist',
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"]
            },
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});