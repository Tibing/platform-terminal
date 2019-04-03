import { Injectable, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2 } from '@angular/core';
import { Widgets } from 'blessed';

import { ViewUtil } from './view-util';

@Injectable()
export class TerminalRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor(viewUtil: ViewUtil) {
    this.renderer = new TerminalRenderer(viewUtil);
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class TerminalRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  destroyNode: ((node: any) => void) | null;

  constructor(private viewUtil: ViewUtil) {
  }

  createElement(name: string, namespace?: string | null): any {
    return this.viewUtil.createElement(name);
  }

  createText(value: string): any {
    // return new Text(value);
    return this.viewUtil.createElement('text', { content: value });
  }

  selectRootElement(): Widgets.Screen {
    return this.viewUtil.selectRootElement();
  }

  addClass(el: any, name: string): void {
  }

  appendChild(parent: Widgets.BlessedElement, newChild: Widgets.BlessedElement): void {
    if (newChild) {
      parent.append(newChild);
      this.viewUtil.selectRootElement().render();
    }
  }

  createComment(value: string): any {
  }

  destroy(): void {
  }

  insertBefore(parent: any, newChild: any, refChild: any): void {
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

  setAttribute(el: Widgets.BlessedElement, name: string, value: string, namespace?: string | null): void {
    el[name] = value;
    el.render();
    this.viewUtil.selectRootElement().render();
  }

  setProperty(el: Widgets.BlessedElement, name: string, value: any): void {
    if (name === 'styles') {
      name = 'style';
    } else if (name === 'data' && value) {
      (<any>el).setData(value);
    } else {
      el[name] = value;
    }
    el.render();
    this.viewUtil.selectRootElement().render();
  }

  setStyle(el: Widgets.BlessedElement, style: string, value: any, flags?: RendererStyleFlags2): void {
    el[style] = value;
    el.render();
    this.viewUtil.selectRootElement().render();
  }

  setValue(node: Widgets.BlessedElement, value: string): void {
    node.setContent(value);
    this.viewUtil.selectRootElement().render();
  }
}
