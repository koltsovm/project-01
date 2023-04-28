import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typeScriptLoader = {
    test: /\.tsx?$/, // Extensions for loading
    use: 'ts-loader', // Loader for files        exclude: /node_modules/,
  };

  return [
    typeScriptLoader,
  ];
};
