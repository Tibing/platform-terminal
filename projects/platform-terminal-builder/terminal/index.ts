import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { BrowserBuilderOutput, executeBrowserBuilder, ExecutionTransformer } from '@angular-devkit/build-angular';
import { IndexHtmlTransform } from '@angular-devkit/build-angular/src/angular-cli-files/utilities/index-file/write-index-html';
import { WebpackLoggingCallback } from '@angular-devkit/build-webpack';
import * as webpack from 'webpack';
import { Configuration } from 'webpack';

import { TerminalSchema } from './schema';


export default createBuilder<json.JsonObject & TerminalSchema>(createTerminal);

interface Transforms {
  webpackConfiguration?: ExecutionTransformer<Configuration>;
  logging?: WebpackLoggingCallback;
  indexHtml?: IndexHtmlTransform;
}

function createTerminal(schema: TerminalSchema, context: BuilderContext): Observable<BrowserBuilderOutput> {
  const transforms: Transforms = createTransforms();
  // @ts-ignore
  return executeBrowserBuilder(schema, context, transforms);
}

function createTransforms(): Transforms {
  return {
    webpackConfiguration(input: Configuration) {
      input.target = 'node';
      input.plugins = [
        ...input.plugins.filter(plugin => !(plugin instanceof webpack.SourceMapDevToolPlugin)),
        new webpack.IgnorePlugin({ resourceRegExp: /^term.js|pty.js$/ }),
      ];

      input.output.library = 'libpack';
      input.output.libraryTarget = 'umd';

      delete input.entry.polyfills;
      delete input.optimization.runtimeChunk;
      delete input.optimization.splitChunks;
      delete input.entry.styles;

      return input;
    },
  };
}
