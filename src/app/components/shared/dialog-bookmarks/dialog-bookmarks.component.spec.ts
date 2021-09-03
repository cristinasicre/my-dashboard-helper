import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookmarksComponent } from './dialog-bookmarks.component';

describe('DialogBookmarksComponent', () => {
  let component: DialogBookmarksComponent;
  let fixture: ComponentFixture<DialogBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
