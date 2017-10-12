const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
    src: path.join(__dirname, 'src'),
    onsenui: path.join(__dirname, 'node_modules/onsenui'),
    fa: path.join(__dirname, 'node_modules/font-awesome'),
    build: path.join(__dirname, 'www')
};

process.env.BABEL_ENV = ENV;

const common = {
    entry: PATHS.src,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }, {
                test: /\.css$/,
                loaders: [
                    'style', 'css?url=false'
                ],
                include: PATHS.onsenui
            }, {
                test: /\.css$/,
                loaders: [
                    'style', 'css?url=false'
                ],
                include: PATHS.src
            }, {
                test: /\.jsx?$/,
                loader: 'babel?cacheDirectory',
                include: PATHS.src
            }
        ]
    }
};

if (ENV === 'development') {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    });
} else {
    module.exports = merge(common, {});
}
