import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../person.model';

@Component({
  selector: 'app-person-editor-td',
  templateUrl: './person-editor-td.component.html',
  styleUrls: ['./person-editor-td.component.scss']
})
export class PersonEditorTdComponent implements OnInit {

  @Input()
  person: IPerson;

  constructor() { }

  ngOnInit() {
  }

}
