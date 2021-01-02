import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTextComponent } from './book-text.component';

describe('BookTextComponent', () => {
  let component: BookTextComponent;
  let fixture: ComponentFixture<BookTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
