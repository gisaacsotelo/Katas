/* eslint-env es6 */
/* eslint-disable no-console */
const path = require('path')

module.exports = {
  // entry: ['./client/index.js', './client/styles/index.scss'],
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
}
