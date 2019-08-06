const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.css',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                    ],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            disable: process.env.NODE_ENV === 'development',
        }),
        new HtmlWebpackPlugin( {
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'src/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'singup.html',
            template: 'src/singup.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'server.html',
            template: 'src/server.html'
        })
    ],
}
