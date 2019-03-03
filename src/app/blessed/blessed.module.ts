import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlessedRendererFactory } from './renderer';
import { Screen, SCREEN_TITLE } from './screen';
import { ViewUtil } from './view-util';
import { BlessedErrorHandler } from './error-handler';

@NgModule({
  imports: [BrowserModule],
  exports: [BrowserModule],
  providers: [
    Screen,
    ViewUtil,
    { provide: SCREEN_TITLE, useValue: 'My Application' },
    { provide: RendererFactory2, useClass: BlessedRendererFactory },
    { provide: ErrorHandler, useClass: BlessedErrorHandler },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BlessedModule {
}
