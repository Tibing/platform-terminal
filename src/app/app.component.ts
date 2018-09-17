import { Component } from '@angular/core';

@Component({
  selector: 'app-one-more-component',
  template: '<box style="height: 10%; width: 40%">This is one more component</box>',
})
export class OneMoreComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <box>This is the AppRoot componenbox</box>
    <app-one-more-component></app-one-more-component>
  `,
})
export class AppComponent {
}
