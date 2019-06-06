import { Component } from '@angular/core';

@Component({
  selector: 'pt-3-text-in-draggable-box',
  template: `
    <box top="center"
         left="center"
         height="50%"
         width="50%"
         [draggable]="true"
         [style]="style">
      <box top="5" left="7" [style]="style">
        More elements!!!
      </box>
    </box>
  `,
})
export class TextInDraggableBoxComponent {
  style = {
    fg: 'white',
    bg: 'green',
    border: {
      fg: 'red',
    },
  };
}
