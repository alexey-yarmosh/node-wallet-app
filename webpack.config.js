const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs')

function getExternals() {
  return fs.readdirSync('node_modules')
    .concat(['react-dom/server'])
    .filter(module => module !== '.bin')
    .reduce((externals, module) => {
      externals[module] = `commonjs ${module}`
      return externals
    }, {})
}

module.exports = [
  {
    name: 'client',
    devtool: 'eval',
    watch: false,
    entry: {
      main: ['babel-polyfill', './source/views/index.client.js']
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.client.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader'
        // },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  },
  {
    name: 'server',
    devtool: 'eval',
    watch: false,
    entry: './source/views/index.server.js',
    output: {
      path: path.resolve(__dirname, 'source/views'),
      filename: 'bundle.server.js',
      libraryTarget: 'umd'
    },
    target: 'node',
    externals: getExternals(),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader'
        // },
        {
          test: /\.css$/,
          loader: 'ignore-loader'
        }
      ]
    }
  }
]
