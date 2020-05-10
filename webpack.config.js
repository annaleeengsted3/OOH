const path = require("path");

// module.exports = {
//   entry: path.join(__dirname, "/IndexApp.ts"),
//   output: {
//     filename: "IndexApp.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000,
//   },
// };

module.exports = {
  entry: path.join(__dirname, "/app.ts"),
  output: {
    filename: "app.js",
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
