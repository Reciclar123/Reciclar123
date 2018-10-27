import { Component, Input } from '@angular/core';

@Component({
  selector: 'field-error-display',
  templateUrl: 'field-error-display.html'
})
export class FieldErrorDisplayComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
