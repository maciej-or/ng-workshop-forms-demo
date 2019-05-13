import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPerson } from '../person.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-editor-td',
  templateUrl: './person-editor-td.component.html',
  styleUrls: ['./person-editor-td.component.scss', '../person-editor-md/person-editor-md.component.scss']
})
export class PersonEditorTdComponent implements OnInit {

  @Input()
  person: IPerson;

  @ViewChild('personForm')
  personForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit td', this.person);
  }

  getErrors(controlName: string) {
    if (this.personForm.controls[controlName]) {
      return this.personForm.controls[controlName].errors;
    }
  }
}
