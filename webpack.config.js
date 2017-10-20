const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

// function getExternals() {
//   return fs.readdirSync('node_modules')
//     .concat(['react-dom/server'])
//     .filter((module) => module !== '.bin')
//     .reduce((externals, module) => {
//       externals[module] = `commonjs ${module}`;
//       return externals;
//     }, {});
// }

module.exports = {
  entry: './source/views/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
