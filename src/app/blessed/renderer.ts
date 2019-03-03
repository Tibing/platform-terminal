import { Injectable, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2 } from '@angular/core';

import { ViewUtil } from './view-util';
import { Widgets } from 'blessed';

@Injectable()
export class BlessedRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor(viewUtil: ViewUtil) {
    this.renderer = new BlessedRenderer(viewUtil);
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class BlessedRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  destroyNode: ((node: any) => void) | null;

  constructor(private viewUtil: ViewUtil) {
  }

  createElement(name: string, namespace?: string | null): any {
    return this.viewUtil.createElement(name);
  }

  createText(value: string): any {
    // return new Text(value);
    return null;
  }

  selectRootElement(): Widgets.Screen {
    return this.viewUtil.selectRootElement();
  }

  addClass(el: any, name: string): void {
  }

  appendChild(parent: any, newChild: any): void {
    if (newChild) {
      this.viewUtil.selectRootElement().append(newChild);
      this.viewUtil.selectRootElement().render();
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
    this.viewUtil.selectRootElement().render();
  }

  setValue(node: any, value: string): void {
    console.log('value', value);
  }
}
