const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
  },
};

const productionPlugins = [
  new CompressionPlugin({
    algorithm: "brotliCompress",
  }),
];

const developmentPlugins = [];

module.exports = (env, { mode }) => ({
  output: {
    filename: "app.[contenthash].js",
  },
  module: {
    rules: [jsRules],
  },
  plugins: [
    ...(mode === "production" ? productionPlugins : developmentPlugins),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ].filter(Boolean),
});
