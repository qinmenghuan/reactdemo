/**
 * Created by qmh on 2016/8/25.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './system/main.js',
    output: {  path: __dirname,
         filename: 'bundle.js' },
    devServer:{
        port : 9003
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },{
                test: /\.scss/,
                include:__dirname,
                loader : "style!css!sass"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=./release/[hash].[ext]'
            }
        ]
    },
    plugins: [
        // 如果打包时候再放开
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //    },
        //    output: {
        //        comments: false,
        //    },
        //}),
        //new webpack.DefinePlugin({
        //    "process.env": {
        //        NODE_ENV: JSON.stringify("production")
        //    }
        //}),
    ],
    resolve:{
        extensions:['','.js'],
        alias:{
            common:__dirname+'/components/index.js'
        }
    }
};