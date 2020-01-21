const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: ['./src/js/app.js', './src/styles/app.scss'],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: (url, resourcePath, context) => {
                                return path.relative(
                                    context + '/src',
                                    resourcePath
                                );
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};

if (process.env.NODE_ENV === 'distribution') {
    module.exports.mode = 'production';
    module.exports.plugins.push(
        new Dotenv({
            path: './.env.example',
            safe: true
        })
    );
    module.exports.plugins.push(new StylelintPlugin());

    module.exports.module.rules.push({
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
            emitWarning: true,
            configFile: './.eslintrc'
        }
    });
} else {
    module.exports.plugins.push(new Dotenv());
}
