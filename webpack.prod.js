const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        // chunkFilename:'bundle.js',
        filename: 'bundle.js'
    },
    performance : {
    hints : false
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "public/index.html"
    }),
    new CleanWebpackPlugin({build: 'build'})
    ],
   
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
    },
    optimization: {}
};