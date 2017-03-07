const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
    context: resolve(__dirname, 'app'),

  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    contentBase: resolve(__dirname, 'dist'),
    stats: { colors: true },
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: 'http://localhost:8080/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}