import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TerminalModule } from './terminal/terminal.module';
import { TransactionsService } from './transactions.service';
import { PlainTextComponent } from './1-plain-text/1-plain-text.component';
import { TextInBoxComponent } from './2-text-in-box/2-text-in-box.component';
import { TextInDraggableBoxComponent } from './3-text-in-draggable-box/3-text-in-draggable-box.component';
import { TableComponent } from './4-table/4-table.component';
import { LineChartComponent } from './5-line-chart/5-line-chart.component';
import { DashboardComponent } from './6-dashboard/6-dashboard.component';
import { SparklineService } from './sparkline.service';
import { ServerUtilizationService } from './server-utilization.service';
import { ProcessManagerService } from './process-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    PlainTextComponent,
    TextInBoxComponent,
    TextInDraggableBoxComponent,
    TableComponent,
    LineChartComponent,
    DashboardComponent,
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
