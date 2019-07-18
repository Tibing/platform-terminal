import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'pl-root',
  template: `
  <layout>
    <pl-plain-text width="50%"></pl-plain-text>
    <pl-text-in-box width="50%"></pl-text-in-box>
  </layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
