import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatInputModule } from '@angular/material';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [FormFieldComponent, FullNamePipe],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [
    FormFieldComponent,
    FullNamePipe
  ]
})
export class SharedModule { }
