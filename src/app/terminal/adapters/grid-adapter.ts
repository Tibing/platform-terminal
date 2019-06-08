import { Widgets } from 'blessed';
import * as contrib from 'blessed-contrib';
import * as BlessedContrib from 'blessed-contrib';
import { Widgets as ContribWidgets } from 'blessed-contrib';

export function gridFactory(options?: ContribWidgets.GridOptions): Widgets.BlessedElement {
  const grid: ContribWidgets.GridElement = new contrib.grid(options);
  return new Proxy(grid, {
    set(target: BlessedContrib.Widgets.GridElement, p: PropertyKey, value: any, receiver: any): boolean {
      if (p === 'rows' || p === 'cols') {
        target[p] = +value;
      } else {
        target[p] = value;
      }
      return true;
    },
  });
}
