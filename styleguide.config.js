module.exports = {
  components: "components/**/*.tsx",
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
};
