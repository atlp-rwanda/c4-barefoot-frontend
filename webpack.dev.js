const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

process.env.NODE_ENV = 'development';

module.exports = merge( common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        // chunkFilename:'[name].bundle.js',
        filename: 'bundle.js'
    },
    devServer: {
        stats:'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*"},
        https: false
    },
    // ------------------------- //
    
});