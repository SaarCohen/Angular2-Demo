import { Component, OnInit, DoCheck, KeyValueDiffers, Input } from '@angular/core';
import { PersonModel } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, DoCheck  {

  model: PersonModel;
  personList: PersonModel[];
  differ: any;
  constructor(private differs: KeyValueDiffers, private personService: PersonService) {
    this.differ = differs.find({}).create(null);
  }

  ngOnInit() {
  	this.model = new PersonModel();
  }

  ngDoCheck() {
  	var changes = this.differ.diff(this.model);

		if(changes) {
			this.model.setImage();
		}
  }

  loadAll(search: string) {
    this.personList = this.personService.getAll(search);
  }

  add(valid: boolean) {
    if(!valid) {
      alert('Fuck Off!!!');
      return;
    }
    this.personService.add(this.model);
    this.model = new PersonModel();
    this.loadAll(null);
  }

}
