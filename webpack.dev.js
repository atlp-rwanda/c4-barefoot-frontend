const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development';

module.exports = merge( common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
   moduleIds: 'named',
   chunkIds: 'named',
   mangleExports: false,
   nodeEnv: 'development',
   flagIncludedChunks: false,
   concatenateModules: false,
   splitChunks: {
     hidePathInfo: false,
     minSize: 10000,
     maxAsyncRequests: Infinity,
     maxInitialRequests: Infinity,
   },
   emitOnErrors: true,
   checkWasmTypes: false,
   minimize: false,
   removeAvailableModules: false
 },
    devServer: {
        stats:'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*"},
        https: false
    },
    plugins: [        
        new HtmlWebpackPlugin({template: "public/index.html"}),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
 ]
    
});