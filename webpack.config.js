var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var srcDir = path.resolve(process.cwd(), '.');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'newjs');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'newjs', item);
        }
    });
    console.log(JSON.stringify(files));
    return files;
}

module.exports = {
    cache: true,
    devtool: "newjs/news.js",
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/newjs/"),
        publicPath: "dist/newjs/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js",
        libraryTarget: 'var'
    },
    resolve: {
        alias: {
            jquery: srcDir + "/js/jquery.js",
            core: srcDir + "/js/core",
            ui: srcDir + "/js/ui"
        }
    },

    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // include: path.resolve(__dirname, "./newjs"),
                options: {
                    'presets': ['latest']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.html/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin('common')
        // new ExtractTextPlugin("styles.css")
    ]
};