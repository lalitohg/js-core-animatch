const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        entry: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: 'animatch_core.js',
        library: 'animatchCore',
        libraryTarget: 'var'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
        ],
    },
}