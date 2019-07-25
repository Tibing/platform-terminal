import { Component } from '@angular/core';

@Component({
  selector: 'pl-table-example',
  template: `
    <table [rows]="data">
    </table>
  `,
})
export class TableExampleComponent {
  data = [
    ['Id', 'Name', 'Email'],
    ['1', 'John', 'john@example.com'],
    ['2', 'Jack', 'jack@example.com'],
  ];
}
