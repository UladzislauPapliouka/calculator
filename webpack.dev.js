const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 4200,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
});
