const fs = require('fs');
const path = require('path');
const reactScriptConfigPaths = require('react-scripts/config/paths');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const publicPath = reactScriptConfigPaths.servedPath;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const nodeModules = {};

fs.readdirSync(reactScriptConfigPaths.appNodeModules)
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

module.exports = {
  mode: 'production',
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: ['babel-polyfill', resolveApp('server/index.js')],
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    path: reactScriptConfigPaths.appBuild,
    publicPath
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  externals: nodeModules,
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          compress: {
            comparisons: false
          },
          output: {
            comments: false,
            ascii_only: true
          },
        },
        sourceMap: shouldUseSourceMap
      })
    ]
  }
};
