const webpackConfig = {
    output: {
        filename: 'output.js',
    },
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
                            configFileName: './test/tsconfig.json',
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-addons-test-utils': 'react',
    },
};

module.exports = function (config) {
    config.set({
        files: [
            'test/index.ts',
        ],

        frameworks: ['mocha'],

        preprocessors: {
            'test/index.ts': ['webpack', 'renamer'],
        },

        reporters: ['mocha'],

        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only',
        },

        renamerPreprocessor: {
            transformPath: function (path) {
                return path.replace(/\.tsx?$/, '.js');
            },
        },

        plugins: [
            require('karma-mocha'),
            require('karma-webpack'),
            require('karma-renamer-preprocessor'),
            require('karma-mocha-reporter'),
        ],
    });
};
