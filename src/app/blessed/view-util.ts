import { Injectable } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

import { Screen } from './screen';

type ElementFactory = (any) => Widgets.BoxElement;

const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('button', blessed.button)
  .set('box', blessed.box);

const defaultOptions = {
  width: 30,
  height: 10,
  tags: true,
  border: {
    type: 'line',
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0',
    },
    hover: {
      bg: 'green',
    },
  },
};

let top = 0;

@Injectable()
export class ViewUtil {
  constructor(private screen: Screen) {
  }

  createElement(name: string): Widgets.BoxElement {
    const elementFactory: ElementFactory = elementsFactory.get(name);
    top += 10;
    return elementFactory({ ...defaultOptions, top: `${top}%` });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen.instance();
  }
}
