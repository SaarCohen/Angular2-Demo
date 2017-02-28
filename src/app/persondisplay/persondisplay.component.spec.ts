/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PersondisplayComponent } from './persondisplay.component';

describe('PersondisplayComponent', () => {
  let component: PersondisplayComponent;
  let fixture: ComponentFixture<PersondisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersondisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    debugger;
    fixture = TestBed.createComponent(PersondisplayComponent);
    component = fixture.componentInstance;
    component.personModel.firstname='first';
    component.personModel.surname='surname';
    component.personModel.sex='male';
    component.personModel.setImage();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain male', () => {
      const fixture = TestBed.createComponent(PersondisplayComponent);
      fixture.componentInstance.personModel = component.personModel;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('male');
  });
});
