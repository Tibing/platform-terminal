import { Widgets } from 'blessed';
import * as blessed from 'blessed';

export function boxAdapter(options?: Widgets.BoxOptions) {
  return blessed.box(options);
}
