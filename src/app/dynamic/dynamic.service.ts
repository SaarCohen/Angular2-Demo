import { Injectable } from '@angular/core';
import { PersondisplayComponent } from '../persondisplay/persondisplay.component';
import { PersonComponent } from '../person/person.component';

export const messageComponents = [PersondisplayComponent, PersonComponent];

@Injectable()
export class DynamicService {

  constructor() { }

  getComponent(type: string) : any {
  	return messageComponents.find(f => f.name.toLowerCase() === type.toLowerCase());
  }
}
