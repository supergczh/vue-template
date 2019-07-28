const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: "./src/main.js"
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue','.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        // .js 用babel解析
        test: /\.js?$/,
        exclude: /node_modules/, // 排除不处理的目录
        include: [
          path.resolve(__dirname, "../src"),

        ],
        use: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "",
      filename: "index.html",
      template: "public/index.html",
      chunks: ["app"],
      hash: false,
      favicon: "public/maniicon.ico" //网页icon
    }),
    new WebpackBar(),
    new VueLoaderPlugin(),
  ]
};