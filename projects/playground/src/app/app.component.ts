import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'pl-root',
  template: `
    <pl-1-plain-text></pl-1-plain-text>
    <!--<pl-2-text-in-box></pl-2-text-in-box>-->
    <!--<pl-3-dashboard></pl-3-dashboard>-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
