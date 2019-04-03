import { Injectable } from '@angular/core';
import { Widgets } from 'blessed';
import * as contrib from 'blessed-contrib';
import { List } from 'blessed/lib/widgets/list';

import { Screen } from './screen';

type ElementFactory = (any) => Widgets.BoxElement;

const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('line', contrib.line);

@Injectable()
export class ViewUtil {
  constructor(private screen: Screen) {
  }

  createElement(name: string, options: any = {}): Widgets.BoxElement {
    const elementFactory: ElementFactory = elementsFactory.get(name);
    return elementFactory(options);
  }

  selectRootElement(): Widgets.Screen {
    return this.screen.instance();
  }
}
