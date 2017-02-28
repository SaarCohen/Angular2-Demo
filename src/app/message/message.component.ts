import { Component, Input, OnInit } from '@angular/core';
//import { PersondisplayComponent } from '../persondisplay/persondisplay.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input()
modalName: string;
@Input()
title: string;
@Input()
component: any;
@Input()
messageComponentData: any;
componentData: any;
  constructor() {
  
   }

 
  ngOnInit() {
     if(this.component) {
	  	 this.componentData = {
	      component: this.component,
	      inputs: this.messageComponentData
	    };	
	  }
  }
  create() : void {
    this.componentData.currentComponent.instance.create();
  }
}
