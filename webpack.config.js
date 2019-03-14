var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCustomCss = new ExtractTextPlugin('./custom.css');

const scssCompileOption = {
    test: /\.scss$/,
    include: [
        path.resolve(__dirname, 'src/css')
    ],
    loader: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }],
        fallback: 'style-loader'
    })
}


const devSetting = {
    devtool: 'source-map',
    entry: {
        index: "./src/App.tsx",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
        ],
        rules: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'happypack/loader'
            },
            {test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/},
            scssCompileOption,
            {test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)(\?.*$|$)/, loader: 'url-loader?limit=100000'},
            {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    devServer: {
        stats: 'errors-only',
        hot: true
    }
};
function outputFolder(folder) {
    return {
        path: path.join(__dirname, folder),
        filename: "[name].js",
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    }
}


let devConfig = Object.assign({}, devSetting,
    {
        output: outputFolder('dist/')
    }
)


// module.exports = [devConfig, prodConfig];
module.exports = devConfig;
// module.exports = prodConfig;