import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRestaurantPage } from './create-restaurant.page';

describe('CreateRestaurantPage', () => {
  let component: CreateRestaurantPage;
  let fixture: ComponentFixture<CreateRestaurantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
