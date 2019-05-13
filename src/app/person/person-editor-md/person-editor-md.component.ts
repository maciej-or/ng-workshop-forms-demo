import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../person.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

    const { firstName, lastName } = this.person;

    // this.personForm = new FormGroup({
    //   firstName: new FormControl(this.person.firstName),
    //   lastName: new FormControl(this.person.lastName)
    // });

    this.personForm = this.fb.group({
      firstName: [firstName],
      lastName: [lastName]
    });

    this.personForm.valueChanges.subscribe(value => {
      console.log(value);
      this.personChange.emit(value);
    });
  }

  onSumbit() {
    console.log(this.personForm.value);
  }

}
