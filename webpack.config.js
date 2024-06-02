const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const WebpackBar = require('webpackbar');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: ['./src/js/app.js', './src/styles/app.scss'],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },

    stats: 'minimal',

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext][query]',
                    outputPath: (pathData) => {
                        const filepath = path
                            .dirname(pathData.filename)
                            .split('/')
                            .slice(1)
                            .join('/');
                        return `${filepath}`;
                    },
                },
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]',
                },
            },
        ],
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};

let dotenvConfig = {};
let minifyCssConfig = {
    filename: 'styles.[chunkhash].css',
};

if (process.env.NODE_ENV === 'distribution') {
    module.exports.mode = 'production';

    module.exports.plugins.push(new StylelintPlugin());

    module.exports.plugins.push(new ESLintPlugin());

    dotenvConfig = {
        path: './.env',
        safe: true,
    };

    minifyCssConfig.filename = 'styles.css';

    // module.exports.module.rules.push({
    //     test: /\.jsx?$/,
    //     enforce: 'pre',
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/,
    //     options: {
    //         emitWarning: true,
    //         configFile: './.eslintrc.json',
    //     },
    // });
}

if (process.env.NODE_ENV === 'analyze') {
    module.exports.plugins.push(new BundleAnalyzerPlugin());
}

module.exports.plugins.push(new Dotenv(dotenvConfig));

module.exports.plugins.push(new MiniCssExtractPlugin(minifyCssConfig));
