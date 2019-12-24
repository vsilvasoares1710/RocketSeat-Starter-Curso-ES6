module.exports = {
  entry: ["@babel/polyfill", "./Modulo3/src/main.js"],
  output: {
    path: __dirname + "/Modulo3/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/Modulo3/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
