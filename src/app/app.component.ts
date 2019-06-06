import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'pt-root',
  template: `
    <pt-1-plain-text></pt-1-plain-text>
    <!--<pt-2-text-in-box></pt-2-text-in-box>-->
    <!--<pt-3-text-in-draggable-box></pt-3-text-in-draggable-box>-->
    <!--<pt-4-table></pt-4-table>-->
    <!--<pt-5-line-chart></pt-5-line-chart>-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
