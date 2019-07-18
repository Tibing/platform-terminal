import { Widgets } from 'blessed';
import * as blessed from 'blessed';

export function lineAdapter(options?: Widgets.LineOptions) {
  return blessed.line(options);
}
