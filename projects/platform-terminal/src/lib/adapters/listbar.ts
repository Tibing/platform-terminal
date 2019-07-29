import * as blessed from 'blessed';
import { Widgets } from 'blessed';

const defaultOptions: Partial<Widgets.ListbarOptions> = {
  tags: true,
  autoCommandKeys: true,
  border: { type: 'line' },
};

export function listbarAdapter(options?: Widgets.ListbarOptions) {
  return blessed.listbar({ ...options, ...defaultOptions });
}
