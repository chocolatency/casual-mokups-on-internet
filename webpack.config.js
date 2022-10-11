const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { toUSVString } = require('util');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        static: 'dist',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.pug$/,
                use: '@webdiscus/pug-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                },
            },
            {
                test: '/\.svg$/',
                loader: 'svg-inline-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src", "templates", "index.pug"),
        })
    ]
}
