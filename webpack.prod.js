const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production';

module.exports = merge( common, {
    mode: 'production',
    context: __dirname,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
    performance : {
    hints : false
    },
    optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    mangleExports: 'deterministic',
    nodeEnv: 'production',
    flagIncludedChunks: true,
    concatenateModules: true,
    splitChunks: {
        hidePathInfo: true,
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
    },
    emitOnErrors: false,
    checkWasmTypes: true,
    minimize: true,
    },
     plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html", filename: 'index.html'}),
        // new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ],
});