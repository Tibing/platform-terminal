import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'pt-5-line-chart',
  template: `
    <line [data]="transactions$ | async"></line>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  transactions$ = this.transactionsService.transactions$;

  constructor(private transactionsService: TransactionsService) {
  }
}
