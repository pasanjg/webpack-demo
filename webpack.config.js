const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // entry file
      filename: 'index.html', // output file
    }),
  ],
};
