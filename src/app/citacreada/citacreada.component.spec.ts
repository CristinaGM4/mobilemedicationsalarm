/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CitacreadaComponent } from './citacreada.component';

describe('CitacreadaComponent', () => {
  let component: CitacreadaComponent;
  let fixture: ComponentFixture<CitacreadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitacreadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitacreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
