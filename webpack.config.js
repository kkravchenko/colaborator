const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'src/static/images',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.svg',
      filename: 'index.html',
      manifest: './public/manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/static/images', to: 'images' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    compress: true,
    port: 3000
  }
}
