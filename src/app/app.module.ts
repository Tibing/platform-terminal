import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TerminalModule } from './terminal/terminal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TerminalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
