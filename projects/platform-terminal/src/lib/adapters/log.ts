import * as blessed from 'blessed';
import { Widgets } from 'blessed';

const defaultOptions: Widgets.LogOptions = {
  scrollable: true,
  input: true,
  alwaysScroll: true,
  scrollbar: {
    ch: ' ',
    inverse: true,
  } as any,
  keys: true,
  vi: true,
  mouse: true,
};

export function logAdapter(options?: Widgets.LogOptions) {
  return blessed.log({ ...options, ...defaultOptions });
}
