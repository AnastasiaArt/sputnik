const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.scss',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ]
                            }
                        },'sass-loader']
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
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
