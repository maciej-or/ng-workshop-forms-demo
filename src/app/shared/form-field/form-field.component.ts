import { Component, OnChanges, ContentChild, ViewChild, OnInit, SimpleChanges, Input } from '@angular/core';
import { MatFormFieldControl, MatFormField } from '@angular/material';
import { ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, OnChanges {

  // workaround
  @ViewChild(MatFormField) matFormField: MatFormField;
  @ContentChild(MatFormFieldControl) control: MatFormFieldControl<any>;

  @Input()
  errors: ValidationErrors;

  errorMessage: string;

  private messages = {
    required: 'we need this field!',
    minlength: 'too short',
    phone: 'phone number is not valid'
  };

  constructor() { }

  ngOnInit() {
    this.matFormField._control = this.control;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (changes.errors) {
      const errors: ValidationErrors = changes.errors.currentValue;
      this.errorMessage = '';
      if (errors) {
        const errorsKeys = Object.keys(errors);
        if (errorsKeys.length) {
          const key = errorsKeys[0];
          this.errorMessage = this.messages[key] ? this.messages[key] : `wrong value [${key}]`;
        }
      }
    }
  }

}
