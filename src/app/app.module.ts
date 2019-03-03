import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent, OneMoreComponent } from './app.component';
import { BlessedModule } from './blessed/blessed.module';

@NgModule({
  declarations: [
    AppComponent,
    OneMoreComponent,
  ],
  imports: [
    BlessedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
