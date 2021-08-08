const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
				postcssOptions: {
					plugins: function() {
						return [autoprefixer]
					}
				}
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|woff(2)?|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[contenthash].[ext]',
          outputPath: 'assets',
        }
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // publicPath: '',
  },
  plugins: [
	new HtmlWebpackPlugin({
		inject: 'body',
		template: path.join(__dirname, 'public', 'index.html'),
		showErrors: true,
		filename: 'index.html',
	}),
    new webpack.HotModuleReplacementPlugin(),
	new Dotenv(),
  ],
  resolve: {
	extensions: ['.js', '.jsx'],
  }
};