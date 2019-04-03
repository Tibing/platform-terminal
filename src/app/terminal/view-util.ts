import { Injectable } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';
import { List } from 'blessed/lib/widgets/list';

import { Screen } from './screen';
import { listFactory } from './view-adapters/list-adapter';
import { progressBarFactory } from './view-adapters/progress-bar-adapter';

type ElementFactory = (any) => Widgets.BoxElement;

const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('button', blessed.button)
  .set('box', blessed.box)
  .set('text', blessed.text)
  .set('list', listFactory)
  .set('textbox', blessed.textbox)
  .set('loading', blessed.loading)
  .set('progressbar', progressBarFactory)
  .set('form', blessed.form);

let top = 0;

@Injectable()
export class ViewUtil {
  constructor(private screen: Screen) {
  }

  createElement(name: string, options: any = {}): Widgets.BoxElement {
    let elementFactory: ElementFactory = elementsFactory.get(name);
    if (!elementFactory) {
      elementFactory = elementsFactory.get('box');
    }
    top += 2;
    return elementFactory({ top: `${top}%`, ...options });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen.instance();
  }
}
