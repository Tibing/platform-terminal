import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalModule } from 'platform-terminal';

import { AppComponent } from './app.component';
import { TransactionsService } from './transactions.service';
import { PlainTextComponent } from './1-plain-text/1-plain-text.component';
import { TextInBoxComponent } from './2-text-in-box/2-text-in-box.component';
import { SparklineService } from './sparkline.service';
import { ServerUtilizationService } from './server-utilization.service';
import { ProcessManagerService } from './process-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    PlainTextComponent,
    TextInBoxComponent,
  ],
  imports: [
    TerminalModule,
    CommonModule,
  ],
  providers: [
    TransactionsService,
    SparklineService,
    ServerUtilizationService,
    ProcessManagerService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
