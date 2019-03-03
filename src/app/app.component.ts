import { Component } from '@angular/core';

@Component({
  selector: 'app-one-more-component',
  template: `
  `,
})
export class OneMoreComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="onClick()"></button>
    <box [style.aleft]="left">This is one more component</box>
  `,
})
export class AppComponent {
  left = 0;
  interval;
  private inc = false;

  onClick() {
    if (this.interval) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        if (this.left === 200) {
          this.inc = true;
        }
        if (this.left === 0) {
          this.inc = false;
        }

        if (this.inc) {
          this.left -= 10;
        } else {
          this.left += 10;
        }
      }, 300);
    }
  }
}
