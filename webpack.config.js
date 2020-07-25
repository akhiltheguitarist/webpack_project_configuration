const path =   require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
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
        new TerserPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ]
};