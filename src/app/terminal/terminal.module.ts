import { ApplicationModule, ErrorHandler, NgModule, RendererFactory2 } from '@angular/core';

import { TerminalRendererFactory } from './renderer';
import { Screen, SCREEN_TITLE } from './screen';
import { ViewUtil } from './view-util';
import { TerminalErrorHandler } from './error-handler';

@NgModule({
  imports: [ApplicationModule],
  exports: [ApplicationModule],
  providers: [
    Screen,
    ViewUtil,
    { provide: SCREEN_TITLE, useValue: 'My Application' },
    { provide: RendererFactory2, useClass: TerminalRendererFactory },
    { provide: ErrorHandler, useClass: TerminalErrorHandler },
  ],
})
export class TerminalModule {
}
