import { Injectable, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2 } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

let top = 10;

export class View {
  children: Node[] = [];
}

export class Element {
  view: View = null;
  children: Node[] = [];

  constructor(public name: string) {
  }
}

export class Text {
  constructor(public value: string) {
  }
}

export type Node = Element | View | Text;

@Injectable()
export class BlessedRendererFactory implements RendererFactory2 {
  readonly root = blessed.screen({ smartCSR: true, title: 'This is base title!!!' });
  protected renderer: Renderer2;

  constructor() {
    this.renderer = new BlessedRenderer(this.root);
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class BlessedRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  destroyNode: ((node: any) => void) | null;

  constructor(public root: Widgets.Screen) {
    root.key(['escape', 'q', 'C-c'], function (ch, key) {
      return process.exit(0);
    });
  }

  createElement(name: string, namespace?: string | null): any {
    top += 10;
    if (name === 'button') {
      return blessed.button({
        top: `${top}%`,
        content: 'BUTTON',
        width: 6,
        height: 1,
        tags: true,
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
      });
    }

    return blessed.box({
      top: `${top}%`,
      content: name,
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
    });
  }

  createText(value: string): any {
    // return new Text(value);
    return null;
  }

  selectRootElement(selectorOrNode: string | any): any {
    return this.root;
  }

  addClass(el: any, name: string): void {
  }

  appendChild(parent: any, newChild: any): void {
    if (newChild) {
      this.root.append(newChild);
      this.root.render();
    }
  }

  createComment(value: string): any {
  }

  destroy(): void {
  }

  insertBefore(parent: any, newChild: any, refChild: any): void {
    // console.log('insertBefore', parent, newChild, refChild);
  }

  listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => (boolean | void)): () => void {
    target.on('click', callback);
    return function () {
    };
  }

  nextSibling(node: any): any {
  }

  parentNode(node: any): any {
  }

  removeAttribute(el: any, name: string, namespace?: string | null): void {
  }

  removeChild(parent: any, oldChild: any): void {
  }

  removeClass(el: any, name: string): void {
  }

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {
  }

  setAttribute(el: any, name: string, value: string, namespace?: string | null): void {
    console.log('attribute', name, value);
  }

  setProperty(el: any, name: string, value: any): void {
    console.log('property', name, value);
  }

  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {
    el[style] = value;
    el.render();
    this.root.render();
  }

  setValue(node: any, value: string): void {
    console.log('value', value);
  }
}
