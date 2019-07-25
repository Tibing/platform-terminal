import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalModule } from 'platform-terminal';

import { AppComponent } from './app.component';

import { TextExampleComponent } from './text/text-example.component';
import { BoxExampleComponent } from './box/box-example.component';
import { TableExampleComponent } from './table/table-example.component';
import { ProgressbarExampleComponent } from './progressbar/progressbar-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TextExampleComponent,
    BoxExampleComponent,
    TableExampleComponent,
    ProgressbarExampleComponent,
  ],
  imports: [
    TerminalModule,
    CommonModule,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
