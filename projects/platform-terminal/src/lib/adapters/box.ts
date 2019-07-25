import * as blessed from 'blessed';
import { Widgets } from 'blessed';

const defaultOptions: Widgets.BoxOptions = {
  tags: true,
  border: { type: 'line' },
};

export function boxAdapter(options?: Widgets.BoxOptions) {
  return blessed.box({ ...options, ...defaultOptions });
}
