import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../person.model';

@Component({
  selector: 'app-person-editor-td',
  templateUrl: './person-editor-td.component.html',
  styleUrls: ['./person-editor-td.component.scss', '../person-editor-md/person-editor-md.component.scss']
})
export class PersonEditorTdComponent implements OnInit {

  @Input()
  person: IPerson;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit td', this.person);
  }
}
