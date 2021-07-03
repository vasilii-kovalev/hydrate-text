import path from "path";

import TerserPlugin from "terser-webpack-plugin";
import * as webpack from "webpack";

interface EnvironmentVariables {
  MINIMIZE?: boolean;
}

const configurationFactory = (
  environmentVariables: EnvironmentVariables,
): webpack.Configuration => {
  const minimize = environmentVariables?.MINIMIZE ?? false;

  return {
    mode: "production",
    entry: {
      index: path.resolve(__dirname, "./dist/esm/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "./dist/umd"),
      filename: `[name]${minimize ? ".min" : ""}.js`,
      library: "HydrateText",
      libraryTarget: "umd",
      globalObject: "this",
    },
    module: {
      rules: [
        {
          test: /\.t|js$/,
          use: "babel-loader",
        },
      ],
    },
    optimization: {
      minimize,
      minimizer: [new TerserPlugin()],
    },
  };
};

module.exports = configurationFactory;
