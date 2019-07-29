import * as blessed from 'blessed';
import { Widgets } from 'blessed';
import { scrollOptions } from './scroll-options';

const defaultOptions: Widgets.TableOptions = {
  tags: true,
  ...scrollOptions,
};

export function tableAdapter(options?: Widgets.TableOptions) {
  return blessed.table({ ...options, ...defaultOptions });
}
