import * as contrib from 'blessed-contrib';
import { Widgets as ContribWidgets } from 'blessed-contrib';
import { ElementFactory } from '../elements-registry';
import { Widgets } from 'blessed';

class DeferredElement {
  parent: ContribWidgets.GridElement;
  row: number;
  col: number;
  rowSpan: number;
  colSpan: number;
  data: any;

  element: ContribWidgets.LineElement;

  appendTo(parent: ContribWidgets.GridElement) {
    this.parent = parent;
  }

}

export const deferredElement = (elementFactory: ElementFactory) => {

  return (options: { screen: Widgets.Screen }) => {
    const temp = new DeferredElement();
    return new Proxy(temp, {
      set(target: DeferredElement, p: PropertyKey, value: any, receiver: any): boolean {
        if (target.element) {
          if (p === 'data' && value) {

            if (elementFactory === contrib.line) {
              target.element.setData(value);
            } else {
              target.element.setData.apply(target.element, Array.isArray(value) ? value : [value]);
            }
            target.data = value;
          } else {
            target[p] = value;

            options.screen.remove(target.element);
            target.element = create();
          }

          if (elementFactory === contrib.table) {
            target.element.focus();
          }

          return true;
        }

        target[p] = value;

        if (hasRequiredProps(target) && !target.element) {
          if (elementFactory === contrib.table && !target['columnWidth']) {
            return true;
          }
          (target.parent as any).cellHeight = 8.333333333333334;
          (target.parent as any).cellWidth = 8.333333333333334;
          target.element = create();

          if (elementFactory === contrib.table) {
            target.element.focus();
          }
        }

        function create() {
          const { parent, element, ...opts } = target;
          return target.parent.set(+target.row, +target.col, +target.rowSpan, +target.colSpan, elementFactory, {
            ...opts,
          });
        }

        return true;
      },
    });
  };
};

const hasRequiredProps = (obj: {}) => {
  return requiredProps.every((prop: string) => obj.hasOwnProperty(prop));
};

const requiredProps = [
  'row',
  'col',
  'rowSpan',
  'colSpan',
];
