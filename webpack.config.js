const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем плагин
// eslint-disable-next-line import/no-extraneous-dependencies
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') {
  // Режим production, если
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}
const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }),
]; // Создаем массив плагинов
if (process.env.SERVE) {
  // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
} // Данный код должен быть размещен после объявления массива plugins
const target = 'web'; // в режиме разработки browserslist не используется

module.exports = {
  entry: './src/index.jsx', // Указываем точку входа - главный модуль приложения,
  // в который импортируются все остальные
  mode,
  plugins,
  target,
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
    // размещаться итоговый бандл, папка dist в корне приложения
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
    // складываться в dist/assets
    clean: true, // Очищает директорию dist перед обновлением бандла
    // Свойство стало доступно с версии 5.20.0, до этого использовался
    // CleanWebpackPlugin
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 4200,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
          },
        },
      },
      {
        test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
