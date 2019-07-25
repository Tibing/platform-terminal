import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'pl-progressbar-example',
  template: `
    <progressbar [value]="progress | async " width="100%" height="1" [style]="{ bar: { bg: 'red'}}">
    </progressbar>
  `,
})
export class ProgressbarExampleComponent {

  progress = interval(100);

}
