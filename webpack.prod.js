const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist"),
};

module.exports = {
  mode: "production",
  entry: PATHS.source + '/index.js',
  devtool: 'inline-source-map',
  output: {
    path: PATHS.build,
    clean: true,
    filename: "[name].[contenthash].js",
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 8000,
    open: true,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
