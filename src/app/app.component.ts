import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-demo';

  person: IPerson = {
    firstName: 'Bolesław',
    lastName: 'Chrobry',
    dateOfBirth: new Date()
  };

}
