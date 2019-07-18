import { Widgets } from 'blessed';
import * as blessed from 'blessed';

export function textAdapter(options?: Widgets.TextOptions) {
  return blessed.text(options);
}
