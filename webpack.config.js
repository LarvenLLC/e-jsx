module.exports = {
  //   entry: "./src/index.tsx",
  //   output: {
  //     filename: "bundle.js",
  //     path: __dirname + "/dist",
  //   },

  // Enable sourcemaps for debugging webpack"s output.
  //   devtool: "source-map",

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },

      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      //   { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
