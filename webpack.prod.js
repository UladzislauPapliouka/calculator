const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }),
  new CompressionPlugin()
];

module.exports = merge(common, {
  mode: 'production',
  plugins,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
      parallel: true
    }),
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ],
  },
});
