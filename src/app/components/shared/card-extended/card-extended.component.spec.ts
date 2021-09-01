import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExtendedComponent } from './card-extended.component';

describe('CardExtendedComponent', () => {
  let component: CardExtendedComponent;
  let fixture: ComponentFixture<CardExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
