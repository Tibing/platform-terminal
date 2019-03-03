import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Widgets } from 'blessed';

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
    <form #form (submit)="submitForm($event)" [keys]="true" [width]="30" [height]="4" bg="green">
      Submit or cancel?
      {{ submitted ? 'Submit' : 'Cancel' }}

      <button
        (click)="submit()"
        [keys]="true"
        [left]="10"
        [top]="2"
        [styles]="stubmitStyles">
        Submit
      </button>

      <button
      (click)="cancel()"
      [keys]="true"
      [left]="30"
      [top]="2"
      [styles]="stubmitStyles">
      Cancel
      </button>

    </form>
  `,
})
export class AppComponent {
  @ViewChild('form') el: ElementRef<Widgets.FormElement<any>>;
  submitted = false;

  stubmitStyles = { bg: 'blue', focus: { bg: 'red' }, hover: { bg: 'red' } };

  submit() {
    this.el.nativeElement.submit();
  }

  cancel() {
    this.el.nativeElement.cancel();
  }

  submitForm(event) {
    debugger;
  }
}
