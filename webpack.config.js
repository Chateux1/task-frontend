const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  mode: "development",
  stats: {
    errorDetails: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[sha1:hash:hex:4]"
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
