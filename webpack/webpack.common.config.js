const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

const PATHS = {
    index: path.join(__dirname, "../src/scripts/"),
    src: path.join(__dirname, "../src/"),
    dist: path.join(__dirname, "../dist"),
};

const isDev = process.env.NODE_ENV === "development";

const filename = (ext) =>
    isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


module.exports = {
    externals: {
        paths: PATHS,
    },

    entry: {
        app: ["babel-polyfill", PATHS.index],
    },
    output: {
        filename: `./scripts/${filename("js")}`,
        path: PATHS.dist,
        publicPath: "",
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
        minimizer: [new TerserPlugin({
            parallel: true
        })],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "cache-loader" },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-proposal-class-properties",
                                "transform-regenerator",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "cache-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "cache-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.(?:png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: `${filename("[ext]")}`,
                            esModule: false,
                            outputPath: "assets/img",
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets/fonts",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `./css/${filename("css")}`,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `src/pages/index.pug`,
            // filename: `${`index.pug`.replace(/\.pug/, ".html")}`,
            chunks: ["app"],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/assets/static`, to: `assets/static` },
                { from: `${PATHS.src}/mail.php`, to: `./` },
                { from: `${PATHS.src}/phpmailer`, to: `./phpmailer` },
                { from: `${PATHS.src}/libs`, to: `./libs` },
            ],
        }),
        new StylelintPlugin({
            configFile: path.resolve(__dirname, "../stylelint.config.js"),
            context: path.resolve(__dirname, "../src/styles"),
            files: "**/*.scss",
        }),
    ],
};
