const webpack = require('webpack');
const pjson = require('./package.json');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: ['./tmpl/web-bridge.js'],
    output: {
        path: `${__dirname}/www`,
        filename: 'maplat_tin.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": 3
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `${pjson.name} v${pjson.version} | ${pjson.author} | license: ${pjson.license}`
        })
    ],
    node: {
        fs: 'empty'
    }
};
