/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersondisplayComponent } from '../persondisplay/persondisplay.component';
import { MessageComponent } from '../message/message.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DynamicService } from '../dynamic/dynamic.service';
import { PersonService } from './person.service';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent, PersondisplayComponent, MessageComponent, DynamicComponent ],
      imports: [ FormsModule ],
      providers: [ PersonService, DynamicService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'person details' in html`, async(() => {
    const fixture = TestBed.createComponent(PersonComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Person Details');
  }));
});
