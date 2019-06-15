import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'pt-root',
  template: `
    <pt-1-plain-text></pt-1-plain-text>
    <!--<pt-2-text-in-box></pt-2-text-in-box>-->
    <!--<pt-3-dashboard></pt-3-dashboard>-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
