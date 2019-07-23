import { Injectable } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

import { ElementFactory, elementsFactories } from './elements-registry';


@Injectable()
export class Screen {
  private screen: Widgets.Screen;

  constructor() {
    this.init();
  }

  createElement(name: string, options: any = {}): Widgets.BlessedElement {
    let elementFactory: ElementFactory = elementsFactories.get(name);

    if (!elementFactory) {
      elementFactory = elementsFactories.get('box');
    }

    return elementFactory({ ...options, screen: this.screen });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen;
  }

  private init() {
    this.screen = blessed.screen({ smartCSR: true });
    this.setupExitListener();
  }

  private setupExitListener() {
    this.screen.key(['escape', 'q', 'C-c'], () => process.exit(0));
  }
}
