import { Component } from '@angular/core';

@Component({
  selector: 'pt-2-text-in-box',
  template: `
    <box top="center"
         left="center"
         height="5"
         width="21"
         [style]="style">
      <box top="2" left="1" [style]="style">
        BOXES ARE BORING!
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
