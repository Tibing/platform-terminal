import { Component } from '@angular/core';

@Component({
  selector: 'app-one-more-component',
  template: '<span>This is one more component</span>',
})
export class OneMoreComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <span>This is the AppRoot component!!!</span>
    <app-one-more-component></app-one-more-component>
  `,
})
export class AppComponent {
}
