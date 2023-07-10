import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildPaths } from './types/config';


export function buildPlugins({ html }: BuildPaths): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html
    }),
  ]
}