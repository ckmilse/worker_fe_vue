var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var apiConfigStr = fs.readFileSync('./assets/server.json').toString();
var StringReplacePlugin = require("string-replace-webpack-plugin");
var apiConfig = JSON.parse(apiConfigStr);
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var transferOpt = [{
    from: 'assets/data',
    to: 'data'
}];

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this nessessary.
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                }
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.js$/,
            loader: StringReplacePlugin.replace({
                replacements: [{
                    pattern: /{{(.+Api)}}/g,
                    replacement: function(match, p1, offset, string) {
                        if (apiConfig[p1] && apiConfig[p1]['serve']) {
                            return apiConfig[p1]['serve'];
                        } else {
                            return ''
                        }

                    }
                }]
            })
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    performance: {
        hints: false
    },
    devServer: {
         historyApiFallback: true,
        //  proxy: {
        //     '/localApi': {
        //         target: 'http://localhost:8080/',
        //         // pathRewrite: {
        //         //     '^/localApi': ''
        //         // },
        //         bypass: function(req, res, proxyOptions) {
        //             console.log(proxyOptions);
        //             if(req.url.indexOf('localApi') > -1) {
        //                 // res.sendfile('assets/data/test.json');
        //                 var data = fs.readFileSync('assets/data/test.json', 'utf8');
        //                 res.setHeader('content-type', 'application/json');
        //                 res.end(data);
        //             }
        //             return false;
        //         }
        //     }
        // },
        // middleware: function() {
        //     conolse.log(arguments);
        // },
        // contentBase: "./dist",
        setup: function(app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            app.post('/*.json', function(req, res) {
                console.log(req.url);
                var filePath = req.url.replace('/dist/data/','');
                var data = fs.readFileSync('assets/data/' + filePath, 'utf8');
                res.setHeader('content-type', 'application/json');
                res.end(data);
                // res.json({ custom: 'response' });
            });
        },
        noInfo: true
    },
    devtool: '#eval-source-map',

    plugins: [
        new StringReplacePlugin(),
        new TransferWebpackPlugin(transferOpt)
    ]

}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
