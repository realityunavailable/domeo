const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    mode: 'production',
    target: 'browserslist',
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ["pug-loader"],
            },
        ]
    }
});