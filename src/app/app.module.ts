import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent, OneMoreComponent } from './app.component';
import { TerminalModule } from './terminal/terminal.module';

@NgModule({
  declarations: [
    AppComponent,
    OneMoreComponent,
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
