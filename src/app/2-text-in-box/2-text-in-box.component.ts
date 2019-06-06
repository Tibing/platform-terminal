import { Component } from '@angular/core';

@Component({
  selector: 'pt-2-text-in-box',
  template: `
    <box top="center"
         left="center"
         height="50%"
         width="50%"
         [style]="style">
      <box top="5" left="7" [style]="style">
        More elements!!!
      </box>
    </box>
  `,
})
export class TextInBoxComponent {
  style = {
    fg: 'white',
    bg: 'green',
    border: {
      fg: 'red',
    },
  };
}
