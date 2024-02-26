import { ComponentFixture, TestBed } from '@angular/core/testing';

import { File3Component } from './file3.component';

describe('File3Component', () => {
  let component: File3Component;
  let fixture: ComponentFixture<File3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ File3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(File3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
