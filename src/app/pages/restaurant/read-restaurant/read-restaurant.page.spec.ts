import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadRestaurantPage } from './read-restaurant.page';

describe('ReadRestaurantPage', () => {
  let component: ReadRestaurantPage;
  let fixture: ComponentFixture<ReadRestaurantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
