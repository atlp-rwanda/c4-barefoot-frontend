# c4-barefoot-frontend

[![Build Status](https://travis-ci.org/atlp-rwanda/c2-barefoot-frontend.svg?branch=develop)](https://travis-ci.org/atlp-rwanda/c2-barefoot-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/0e0e17e256bddb871c2b/maintainability)](https://codeclimate.com/github/atlp-rwanda/c2-barefoot-frontend/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/atlp-rwanda/c2-barefoot-frontend/badge.svg?branch=develop)](https://coveralls.io/github/atlp-rwanda/c2-barefoot-frontend?branch=develop)

## Setting react project from scratch

- First of all you need to clone project reposotory by running
  `git clone git clone https://github.com/atlp-rwanda/c4-barefoot-frontend.git`

## Initializing node module packages

- run `npm init --yes` here package.json will be created imadiately

## Installation dependencies

    Here we need to install all packgages that will be used to set up our project

- `npm install react`
- `npm i react-dom`
- `npm i react-roouter-dom`

## Transipiling babel

    We need compile our javascript file from ECMA2015 (ES6) to ES5

- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `babel-loader`
- `babel/core`

## Installing plugins that will allow react to unstander html files

- `npm i html-webpack-plugin`
- `npm i htm-loader`

## In our project we need to style the pages we need to install this dependencies

- `npm i css-loader`
- `npm i style-loader`

After that we will need to run our project in devlopment
we have to make sure that webpack dependencies are installed like:

- `npm i webpack-cli` Note: here you have to pay more attation on version of webpack-cli I am using version: `3.3.12` other version is not working
- `npm i webpack`
- `npm i webpack-dev-server` This will helps us to run server automatically after save when you change any file content

## After that we need to tell webpack what to do

```const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
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

    plugins: [
        new HtmlWebpackPlugin({
        template: "public/index.html"
    })
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
    }
};
```

### Here we go now we can start our project by running `npm start`

you will get error that says `no start script available` now you can guess what do right now

let jump into package.json and configure `start script`

```"scripts": {
    "start": "webpack-dev-server --config webpack.config.js --port 3000 --open"
  }
```

so far you can run `npm start`
