import * as blessed from 'blessed';
import { Widgets } from 'blessed';

const defaultOptions: Widgets.TableOptions = {
  tags: true,
};

export function tableAdapter(options?: Widgets.TableOptions) {
  return blessed.table({ ...options, ...defaultOptions });
}
