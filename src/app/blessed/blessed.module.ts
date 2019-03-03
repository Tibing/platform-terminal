import { NgModule, NO_ERRORS_SCHEMA, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlessedRendererFactory } from './renderer';
import { Screen } from './screen';

@NgModule({
  imports: [BrowserModule],
  exports: [BrowserModule],
  providers: [
    Screen,
    { provide: RendererFactory2, useClass: BlessedRendererFactory },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BlessedModule {
}
