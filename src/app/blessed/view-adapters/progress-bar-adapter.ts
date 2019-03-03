import * as blessed from 'blessed';
import { Widgets } from 'blessed';

export function progressBarFactory(options?: Widgets.ProgressBarOptions): Widgets.BlessedElement {
  const progressbar: Widgets.ProgressBarElement = blessed.progressbar(options);
  return new Proxy(progressbar, {
    set(target, prop, value) {
      if (prop === 'filled') {
        target.setProgress(value);
      } else {
        target[prop] = value;
      }
      return true;
    },
  });
}
