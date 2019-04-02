import { ApplicationModule, ErrorHandler, NgModule, RendererFactory2 } from '@angular/core';

import { BlessedRendererFactory } from './renderer';
import { Screen, SCREEN_TITLE } from './screen';
import { ViewUtil } from './view-util';
import { BlessedErrorHandler } from './error-handler';

@NgModule({
  imports: [ApplicationModule],
  exports: [ApplicationModule],
  providers: [
    Screen,
    ViewUtil,
    { provide: SCREEN_TITLE, useValue: 'My Application' },
    { provide: RendererFactory2, useClass: BlessedRendererFactory },
    { provide: ErrorHandler, useClass: BlessedErrorHandler },
  ],
})
export class BlessedModule {
}
