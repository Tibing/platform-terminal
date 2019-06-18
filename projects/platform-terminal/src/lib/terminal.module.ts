import { ApplicationModule, ErrorHandler, NgModule, RendererFactory2 } from '@angular/core';

import { TerminalRendererFactory } from './renderer';
import { Screen } from './screen';
import { TerminalErrorHandler } from './error-handler';

@NgModule({
  exports: [ApplicationModule],
  providers: [
    Screen,
    { provide: RendererFactory2, useClass: TerminalRendererFactory, deps: [Screen] },
    { provide: ErrorHandler, useClass: TerminalErrorHandler },
  ],
})
export class TerminalModule {
}
