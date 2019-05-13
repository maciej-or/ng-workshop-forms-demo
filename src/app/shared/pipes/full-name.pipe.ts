import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from 'src/app/person/person.model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(person: IPerson, args?: any): any {
    if (person) {
      const middleName = person.middleName ? ` ${person.middleName} ` : ' ';
      return `${person.firstName}${middleName}${person.lastName}`;
    }
    return '';
  }

}
