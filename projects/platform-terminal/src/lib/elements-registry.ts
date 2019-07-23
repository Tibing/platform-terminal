import { Widgets } from 'blessed';
import * as blessed from 'blessed';

import { layoutAdapter } from './adapters/layout';

export type ElementFactory = (any) => Widgets.BlessedElement;

export const elementsFactories: Map<string, ElementFactory> = new Map()
  .set('layout', layoutAdapter)
  .set('text', blessed.text)
  .set('box', blessed.box)
  .set('line', blessed.line);

