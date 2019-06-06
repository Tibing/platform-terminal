import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pt-4-table',
  template: `
    <table [data]="data" top="3" left="4" [border]="{type: 'line'}"></table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  data = [
    ['Animals', 'Foods'],
    ['Elephant', 'Apple'],
    ['Bird', 'Orange'],
  ];
}
