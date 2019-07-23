import { Widgets } from 'blessed';
import * as blessed from 'blessed';

const defaultOptions: Widgets.LayoutOptions = {
  width: '100%',
  height: '100%',
  layout: 'grid',
};

export function layoutAdapter(options?: Widgets.LayoutOptions) {
  return blessed.layout({ ...options, ...defaultOptions });
}
