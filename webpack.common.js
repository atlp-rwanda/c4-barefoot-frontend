const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/index.js',
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
            test: /(\.css)$/,
            use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: "html-loader"
                }
                ]
            }
        ]
    }
};