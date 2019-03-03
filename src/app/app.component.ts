import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-more-component',
  template: `
    {{ items }}
  `,
})
export class OneMoreComponent {
  @Input() items;
}

@Component({
  selector: 'app-root',
  template: `
    <progressbar [filled]="left" [pch]="'_'"></progressbar>
  `,
})
export class AppComponent {
  items = ['Item 1'];
  left = 10;

  constructor() {
    this.go();
  }

  go() {
    setTimeout(() => {
      const newItem = `Item: ${this.items.length + 1}`;
      this.items = [...this.items, newItem];
      this.left += 10;
      this.go();
    }, 1000);
  }
}
