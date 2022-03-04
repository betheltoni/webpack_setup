const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
            {
                test: /\.(svg|png|ico|jpg|jpeg|gif)$/,
                type: "asset/resource"
            }

        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack Demo",
        filename: "index.html",
        template: path.resolve(__dirname, "app/index.html"),
    })],
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        
        port:5001,
        open: true,
        hot: true,
    }
};