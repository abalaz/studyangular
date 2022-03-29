import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSixComponent } from './list-six.component';

describe('ListSixComponent', () => {
  let component: ListSixComponent;
  let fixture: ComponentFixture<ListSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
