module.exports = {
  components: "components/**/*.tsx",
  propsParser: require("react-docgen-typescript").withDefaultConfig([
    parserOptions,
  ]).parse,
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
