const { ESLINT_MODES } = require('@craco/craco');
const path = require('path');

const webpack = require('webpack');

module.exports = {
  stats: {
    errorDetails: true,
  },
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js/,
            exclude:[
              path.resolve(__dirname, './node_modules')
            ],
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
      ignoreWarnings: [/Failed to parse source map/],
      resolve: {
        fallback: {
          os: require.resolve('os-browserify'),
          crypto: require.resolve('crypto-browserify'),
          http: require.resolve('http-browserify'),
          https: require.resolve('https-browserify'),
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util/'),
          buffer: require.resolve('buffer/'),
          assert: require.resolve('assert/'),
        },
      },
      plugins: [],
    },
  },
};
