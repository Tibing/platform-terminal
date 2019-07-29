import * as blessed from 'blessed';
import { Widgets } from 'blessed';
import { scrollOptions } from './scroll-options';

const defaultOptions: Widgets.LogOptions = {
  ...scrollOptions,
};

export function logAdapter(options?: Widgets.LogOptions) {
  return blessed.log({ ...options, ...defaultOptions });
}
