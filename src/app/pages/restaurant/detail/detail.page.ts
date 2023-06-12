import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantInterface } from 'src/app/models/restaurant.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  restaurant: RestaurantInterface | undefined;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getRestaurantDetail(restaurantId).subscribe(restaurant => {
      this.restaurant = restaurant;
    });
  }

}
