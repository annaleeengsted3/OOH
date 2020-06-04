const path = require("path");

module.exports = {
  entry: {
    base: "./app.ts",
    index: "./ModuleIndex.ts",
    about: "./ModuleOmOs.ts",
    events: "./ModuleKommendeEvents.ts",
    event: "./ModuleEvent.ts",
    viden: "./ModuleViden.ts",
    vidensblog: "./ModuleVidensBlog.ts",
    database: "./ModuleAffaldsDatabase.ts",
    biolog: "./ModuleBiolog.ts",
    kontakt: "./ModuleKontakt.ts",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        loader: "ignore-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "dist",
  },
  watch: true,
};
