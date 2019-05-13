import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [
    FormFieldComponent
  ]
})
export class SharedModule { }
