const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: '.app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }, plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "app.css"
        })
    ], resolve: {
        extensions: ['.js', '.jsx']
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './public'
                    }
                },
                "css-loader"
            ]
        },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: [
                    {
                        loader: 'file'
                    }
                ]
            }
        ]
    }
}