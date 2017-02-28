/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { PersondisplayComponent } from '../persondisplay/persondisplay.component';
import { PersonComponent } from '../person/person.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DynamicService } from '../dynamic/dynamic.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageComponent, DynamicComponent, PersonComponent, PersondisplayComponent ],
      imports: [ FormsModule ],
      providers: [ DynamicService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
