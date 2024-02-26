import { ComponentFixture, TestBed } from '@angular/core/testing';

import { File4Component } from './file4.component';

describe('File4Component', () => {
  let component: File4Component;
  let fixture: ComponentFixture<File4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ File4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(File4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
