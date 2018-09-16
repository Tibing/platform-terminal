import {
  APP_INITIALIZER,
  Injectable,
  NgModule,
  NgZone,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
export class InMemoryRendererFactory implements RendererFactory2 {
  readonly root: Element = new Element('');
  protected renderer: Renderer2;

  constructor() {
    this.renderer = new InMemoryRenderer(this.root);
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class InMemoryRenderer implements Renderer2 {
  readonly data: { [p: string]: any };
  destroyNode: ((node: any) => void) | null;

  constructor(public root: Element) {
  }

  createElement(name: string, namespace?: string | null): any {
    return new Element(name);
  }

  createText(value: string): any {
    return new Text(value);
  }

  selectRootElement(selectorOrNode: string | any): any {
    this.root.name = selectorOrNode;
    return this.root;
  }

  addClass(el: any, name: string): void {
  }

  appendChild(parent: Element, newChild: Element): void {
    parent.children.push(newChild);
  }

  createComment(value: string): any {
  }

  destroy(): void {
  }

  insertBefore(parent: any, newChild: any, refChild: any): void {
    console.log('insertBefore', parent, newChild, refChild);
  }

  listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => (boolean | void)): () => void {
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
  }

  setProperty(el: any, name: string, value: any): void {
  }

  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {
  }

  setValue(node: any, value: string): void {
  }
}

export function setUpRenderFlushing(zone: NgZone, renderer: InMemoryRendererFactory) {
  return () => {
    zone.onStable.subscribe(() => {
      console.log(renderer.root);
      // console.group('--');
      // console.log(JSON.stringify(renderer.root, null, 2));
      // console.groupEnd();
    });
  };
}

@NgModule({
  imports: [BrowserModule],
  exports: [BrowserModule],
  providers: [
    { provide: RendererFactory2, useClass: InMemoryRendererFactory },
    { provide: APP_INITIALIZER, multi: true, useFactory: setUpRenderFlushing, deps: [NgZone, RendererFactory2] },
  ],
})
export class InMemoryBrowserPlatform {
}
