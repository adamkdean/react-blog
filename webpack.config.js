'use strict';

var path = require('path'),
    webpack = require('webpack'),
    config = {};

Object.assign(config, {
    entry: './shared/views/index.js',
    output: {
        path: path.join(__dirname, 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'shared')
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true,
        progress: true
    }
});

if (process.env.NODE_ENV === 'development') {
    Object.assign(config, {
        devtool: 'eval'
    });
}

if (process.env.NODE_ENV === 'production') {
    Object.assign(config, {
        // any production config changes go here
    });
}

module.exports = exports = config;
