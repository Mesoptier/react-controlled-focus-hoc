const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: './tsconfig.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
