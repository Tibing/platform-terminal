import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

export const SCREEN_TITLE: InjectionToken<string> = new InjectionToken('screen title');

@Injectable()
export class Screen {
  private screen: Widgets.Screen;

  constructor(@Inject(SCREEN_TITLE) private title: string) {
    this.init();
  }

  instance(): Widgets.Screen {
    return this.screen;
  }

  private init() {
    this.screen = blessed.screen({ smartCSR: true, title: this.title });
    this.setupExitListener();
  }

  private setupExitListener() {
    this.screen.key(['escape', 'q', 'C-c'], () => process.exit(0));
  }
}
