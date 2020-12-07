const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
process.env.NODE_ENV = 'production';

module.exports = merge( common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
    performance : {
    hints : false
    },
    
});