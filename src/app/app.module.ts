import { BrowserModule,Title } from '@angular/platform-browser';
import { APP_BASE_HREF, Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, routedComponents } from './app.routing';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/person.service';
import { PersondisplayComponent } from './persondisplay/persondisplay.component';
import { MessageComponent } from './message/message.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicService } from './dynamic/dynamic.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    routedComponents,
    PersondisplayComponent,
    MessageComponent,
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PersonService, Title, DynamicService,
  { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent/*, PersonComponent*/]
})

export class AppModule { }

