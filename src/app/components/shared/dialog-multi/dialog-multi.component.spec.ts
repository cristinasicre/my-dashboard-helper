import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMultiComponent } from './dialog-multi.component';

describe('DialogMultiComponent', () => {
  let component: DialogMultiComponent;
  let fixture: ComponentFixture<DialogMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
