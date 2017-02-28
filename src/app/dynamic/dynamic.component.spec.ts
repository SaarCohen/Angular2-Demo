/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersondisplayComponent } from '../persondisplay/persondisplay.component';
import { PersonComponent } from '../person/person.component';
import { MessageComponent } from '../message/message.component';
import { DynamicComponent } from './dynamic.component';
import { DynamicService } from './dynamic.service';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponent, PersonComponent, PersondisplayComponent, MessageComponent ],
      providers: [ DynamicService ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
