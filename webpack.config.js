module.exports = {
  entry: "./Modulo2/main.js",
  output: {
    path: __dirname + "/Modulo2",
    filename: "bundle.js"
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
