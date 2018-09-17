import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent, OneMoreComponent } from './app.component';
import { BlessedPlatform } from './blessed-renderer';

@NgModule({
  declarations: [
    AppComponent,
    OneMoreComponent,
  ],
  imports: [
    BlessedPlatform,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
