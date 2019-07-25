import { Widgets } from 'blessed';
import * as blessed from 'blessed';

import { layoutAdapter } from './adapters/layout';

export type ElementFactory = (any) => Widgets.BlessedElement;

export const elementFactories: Map<string, ElementFactory> = new Map()
  .set('layout', layoutAdapter)
  .set('text', blessed.text)
  .set('box', blessed.box)
  .set('line', blessed.line)
  .set('progressbar', blessed.progressbar)
  .set('table', blessed.table);


export type ElementPropertyDecorator = (element: Widgets.BlessedElement, name: string, value: any) => any;

export const elementPropertyDecorators: Map<string, Map<string, ElementPropertyDecorator>> = new Map()
  .set('progress-bar', new Map([
    ['value', (element: Widgets.ProgressBarElement, name, value) => element.setProgress(value)],
    ['filled', (element: Widgets.ProgressBarElement, name, value) => element.setProgress(value)],
  ]))
  .set('table', new Map([
    ['rows', (element: Widgets.TableElement, name, value) => element.setRows(value)],
    ['data', (element: Widgets.TableElement, name, value) => element.setData(value)],
  ]));
