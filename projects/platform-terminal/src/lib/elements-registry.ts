import { Widgets } from 'blessed';

import { textAdapter } from './adapters/text';
import { boxAdapter } from './adapters/box';
import { lineAdapter } from './adapters/line';
import { layoutAdapter } from './adapters/layout';

export type ElementFactory = (any) => Widgets.BlessedElement;

export const elementsFactories: Map<string, ElementFactory> = new Map()
  .set('layout', layoutAdapter)
  .set('text', textAdapter)
  .set('box', boxAdapter)
  .set('line', lineAdapter);

