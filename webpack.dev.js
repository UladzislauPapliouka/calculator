const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 4200,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
});
