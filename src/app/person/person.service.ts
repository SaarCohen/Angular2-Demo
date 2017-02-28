import { Injectable } from '@angular/core';
import { PersonModel } from './person.model';

@Injectable()
export class PersonService {

  private persons: PersonModel[] = [ new PersonModel('Alex', 'Brown', 'male') , new PersonModel('John', 'Smith', 'male'), new PersonModel('Jane', 'Ayre', 'female') ];
  constructor() { }

  getAll(search?: string) : PersonModel[] {
  	if(search) {
  		return this.persons.filter(x=> x.firstname.toLowerCase().indexOf(search.toLowerCase())!=-1);
  	} else {
  		return this.persons;
  	}
  }

  add(person: PersonModel) : void {
  	this.persons.push(person);
  }

}
