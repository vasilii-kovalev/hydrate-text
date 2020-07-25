import path from 'path';

import TerserPlugin from 'terser-webpack-plugin';
import { ConfigurationFactory } from 'webpack';

const configurationFactory: ConfigurationFactory = env => {
  const parsedMinimize = typeof env === 'string'
    ? false
    : env?.MINIMIZE;
  const minimize = Boolean(parsedMinimize);

  return {
    mode: 'production',
    entry: {
      index: path.resolve(__dirname, './dist/esm/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist/umd'),
      filename: `[name]${minimize ? '.min' : ''}.js`,
      library: 'HydrateText',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.t|js$/,
          use: 'babel-loader',
        },
      ],
    },
    optimization: {
      minimize,
      minimizer: [
        new TerserPlugin(),
      ],
    },
  };
};

module.exports = configurationFactory;
