import * as contrib from 'blessed-contrib';
import { Widgets as ContribWidgets } from 'blessed-contrib';
import { ElementFactory } from '../elements-registry';
import { Widgets } from 'blessed';

interface DeferredGridChildElementParams {
  row?: number;
  col?: number;
  rowSpan?: number;
  colSpan?: number;
}

class DeferredElement {
  parent: ContribWidgets.GridElement;
  props: DeferredGridChildElementParams = {};
  data: any;

  element: ContribWidgets.LineElement;

  appendTo(parent: ContribWidgets.GridElement) {
    this.parent = parent;
  }
}

/**
 * Since not all elements can be rendered as soon as they are added to the parent element
 * we need to wait until all required properties assigned and only then we can render an element.
 * That's we're providing deferredElement here. It intercepts all calls to the element factory,
 * then, waits until all required properties assigned and only then actually renders an element.
 * */
export const deferredElement = (elementFactory: ElementFactory) => {

  return (options: { screen: Widgets.Screen }) => {

    // Temp object that contains all properties until element rendered
    const temp = new DeferredElement();

    // Creating a proxy to intercept all cals to the element factory
    return new Proxy(temp, {
      set(target: DeferredElement, p: PropertyKey, value: any, receiver: any): boolean {

        if (target.element) {

          // If we already have an element assign props and recreate
          assignToExistingElement(options.screen, target, elementFactory, p, value);
          return true;
        }

        if (p === 'parent') {

          // If assigning parent just store it in the separate field
          target.parent = value;
          return true;
        }

        // All the props are stored here
        target.props[p] = value;

        // In case we have all the required properties and element wasn't created yet
        // we can start creation process
        if (hasRequiredProps(target) && !target.element) {
          renderElement(elementFactory, target);
        }

        return true;
      },
    });
  };
};

const assignToExistingElement = (screen: Widgets.Screen, target: DeferredElement, elementFactory: Function, p: PropertyKey, value: any) => {
  if (p === 'data' && value) {

    // Depending on type of the element it can accept data in different formats.
    // So, here we have a quick fix.
    if (elementFactory === contrib.line) {

      // For instance line accepts an array of lines as one param.
      target.element.setData(value);
    } else {

      // Meanwhile, other elements require parameters to be spread
      target.element.setData.apply(target.element, Array.isArray(value) ? value : [value]);
    }

    // When data loaded to the element we need to store it for the rerendering purpose
    target.data = value;
  } else {

    // If assigning not data parameter element has to be recreated.
    // So, just store a new value
    target.props[p] = value;

    // Completely remove element from the screen
    screen.remove(target.element);

    // And create new element with new params
    target.element = create(target, elementFactory);
  }

  // It's just a trick for demo :)
  // Focusing element if it's a table
  if (elementFactory === contrib.table) {
    target.element.focus();
  }
};

const create = (target: DeferredElement, elementFactory: Function) => {
  const { parent, props, data } = target;
  const { row, col, rowSpan, colSpan, ...opts } = props;

  // Creating a new element inside the grid
  return parent.set(+row, +col, +rowSpan, +colSpan, elementFactory, {
    ...opts,
    data,
  });
};

const renderElement = (elementFactory: Function, target: DeferredElement) => {

  // Quick fix for demo - can't render table without columnWidth property.
  if (elementFactory === contrib.table && !target.props['columnWidth']) {
    return true;
  }

  // Quick fix for demo - actually, we need to wait until grid will be rendered
  // and only then assign other params.
  // But now we're just patching grid with required values.
  (target.parent as any).cellHeight = 8.333333333333334;
  (target.parent as any).cellWidth = 8.333333333333334;

  // Actually creating an element
  target.element = create(target, elementFactory);

  // It's just a trick for demo :)
  // Focusing element if it's a table
  if (elementFactory === contrib.table) {
    target.element.focus();
  }
};

const hasRequiredProps = (obj: DeferredElement) => {
  return requiredProps.every((prop: string) => obj.props.hasOwnProperty(prop));
};

const requiredProps = [
  'row',
  'col',
  'rowSpan',
  'colSpan',
];
