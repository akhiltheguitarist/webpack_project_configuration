const path =   require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: {
        'home': './src/index.js',
        'rose-image': './src/rose-image.js'
    },
    output: {
        //contenthash to give different name for bundle.js each time it builds
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: ''
    },
    //mode can be none/production/development
    mode: 'development',
    devServer : {
        contentBase :path.resolve(__dirname,'./dist'),
        index: 'index.html',
        port: 8000
    },
    module: {
        rules:[
           {
                test: /\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            /*
            {
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]
            },*/
            {
                test: /\.css$/,
                use: [
                    //Use the MiniCSSExtractPlugin to obtain this as a seperate file along with bundle.js
                    MiniCSSExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader','css-loader','sass-loader'
                ]
            }
        ]
    },
    plugins:[
        //To reduce the bundle.js file size
        new TerserPlugin(),
        //To obtain css bundle file separately
        new MiniCSSExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        //To clean the bundle.js folder before each new build
        new CleanWebpackPlugin(),
         //To update the bundle html reference after using contenthash
        /*
        new HtmlWebpackPlugin({
            title: 'App Title',
            meta: {
                description: 'Sample App'
            }
        }), */
        new HtmlWebpackPlugin({
            filename: 'home.html',
            chunks: ['home'],
            title: 'home page'
        }), 
        new HtmlWebpackPlugin({
            filename: 'rose-image.html',
            chunks: ['rose-image'],
            title: 'rose page'
        })
    ]
};