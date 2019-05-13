import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../person.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validatePhone } from 'src/app/shared/validators/phone.validator';

@Component({
  selector: 'app-person-editor-md',
  templateUrl: './person-editor-md.component.html',
  styleUrls: ['./person-editor-md.component.scss']
})
export class PersonEditorMdComponent implements OnInit {

  @Input()
  person: IPerson;

  @Output()
  personChange = new EventEmitter();

  personForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const { firstName, lastName, phone } = this.person;

    // this.personForm = new FormGroup({
    //   firstName: new FormControl(this.person.firstName),
    //   lastName: new FormControl(this.person.lastName)
    // });

    this.personForm = this.fb.group({
      firstName: [firstName, [Validators.required, Validators.minLength(3)] ],
      lastName: [lastName, [Validators.required, Validators.minLength(2)] ],
      phone: [phone, [validatePhone]]
    });

    this.personForm.valueChanges.subscribe(value => {
      this.personChange.emit(value);
    });
  }

  onSumbit() {
    console.log(this.personForm.value);
  }

  getErrors(controlName: string) {
    return this.personForm.controls[controlName].errors;
  }

}
