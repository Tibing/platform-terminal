import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'pl-root',
  template: `
  <layout>
    <pl-text-example width="25%" height="50%"></pl-text-example>
    <pl-box-example width="25%" height="50%"></pl-box-example>
    <pl-table-example width="25%" height="50%"></pl-table-example>
    <pl-progressbar-example width="25%" height="50%"></pl-progressbar-example>
  </layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
