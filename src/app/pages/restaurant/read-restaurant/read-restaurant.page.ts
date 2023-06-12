import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs';
import { RestaurantInterface } from 'src/app/models/restaurant.interface';

@Component({
  selector: 'app-read-restaurant',
  templateUrl: './read-restaurant.page.html',
  styleUrls: ['./read-restaurant.page.scss'],
})
export class ReadRestaurantPage implements OnInit {

  restaurants: Observable<RestaurantInterface[]> | undefined;

  constructor(private firestoreService: FirestoreService) {
    this.restaurants = this.firestoreService.readRestaurants();
  }

  ngOnInit() { }

}
