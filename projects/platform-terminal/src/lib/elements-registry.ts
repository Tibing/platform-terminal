import { Widgets } from 'blessed';
import * as blessed from 'blessed';

import { layoutAdapter } from './adapters/layout';
import { boxAdapter } from './adapters/box';
import { listbarAdapter } from './adapters/listbar';
import { tableAdapter } from './adapters/table';

export type ElementFactory = (any) => Widgets.BlessedElement;

export const elementFactories: Map<string, ElementFactory> = new Map()
  .set('layout', layoutAdapter)
  .set('text', blessed.text)
  .set('box', boxAdapter)
  .set('line', blessed.line)
  .set('log', blessed.log)
  .set('listbar', listbarAdapter)
  .set('progressbar', blessed.progressbar)
  .set('table', tableAdapter);

export type ElementPropertyDecorator = (element: Widgets.BlessedElement, name: string, value: any) => any;

export const elementPropertyDecorators: Map<string, Map<string, ElementPropertyDecorator>> = new Map()
  .set('progress-bar', new Map([
    ['value', (element: Widgets.ProgressBarElement, name, value) => element.setProgress(value)],
    ['filled', (element: Widgets.ProgressBarElement, name, value) => element.setProgress(value)],
  ]))
  .set('table', new Map([
    ['rows', (element: Widgets.TableElement, name, value) => element.setRows(value)],
    ['data', (element: Widgets.TableElement, name, value) => element.setData(value)],
  ]))
  .set('listbar', new Map([
    ['items', (element: Widgets.ListbarElement, name, value) => { element.setItems(value); }],
    ['commands', (element: Widgets.ListbarElement, name, value) => { element.setItems(value); }],
    ['label', (element: Widgets.ListbarElement, name, value) => element.setLabel(value)],
  ]))
  .set('box', new Map([
    ['content', (element: Widgets.BoxElement, name, value) => element.setContent(value)],
    ['label', (element: Widgets.BoxElement, name, value) => element.setLabel(value)],
  ]));
