import { Component, OnInit, Input, Injector} from '@angular/core';
import { PersonModel } from '../person/person.model';

@Component({
  selector: 'person-display',
  templateUrl: './persondisplay.component.html',
  styleUrls: ['./persondisplay.component.css']
})

export class PersondisplayComponent implements OnInit {
  @Input()
  personModel: PersonModel = new PersonModel();

  constructor(private injector: Injector) { 
    if(injector) {
    	let data = injector.get('personModel', null);
    	if(data) {
    		this.personModel.firstname = data.firstname;
    		this.personModel.surname = data.surname || this.personModel.surname;
    		this.personModel.sex = data.sex || this.personModel.sex;
    		this.personModel.setImage();
    	}
    }
  }

  ngOnInit() {
  }

  create() : void {
    console.log('Done');
  }
}
