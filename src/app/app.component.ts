import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionsService } from './transactions.service';


@Component({
  selector: 'app-root',
  template: `
    <line [data]="transactions$ | async"></line>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  transactions$ = this.transactionsService.transactions$;

  constructor(private transactionsService: TransactionsService) {
  }
}
