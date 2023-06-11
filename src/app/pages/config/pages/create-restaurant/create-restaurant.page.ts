import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { RestaurantInterface, RestaurantInventoryInterface } from 'src/app/models/restaurant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.page.html',
  styleUrls: ['./create-restaurant.page.scss'],
})
export class CreateRestaurantPage implements OnInit {

  createRestaurantForm: FormGroup;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    // Create a Restaurant
    this.createRestaurantForm = formBuilder.group({
      restaurantName: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  async createRestaurant() {
    const loading = await this.loadingCtrl.create();

    const restaurant: Restaurant = {
      id: (Math.random() * 10000) / (Math.random() * 10),
      name: this.createRestaurantForm.value.restaurantName,
      inventory: null
    }


    this.firestoreService.createRestaurant(restaurant)
      .then(
        () => {
          loading.dismiss();
          this.router.navigate(['/tabs/config']);
        },
        (reason) => {
          console.error(reason);
        }
      )

    return await loading.present();
  }

}

class Restaurant implements RestaurantInterface {
  id: any;
  name: string = "";
  inventory = null;

  constructor() { }
}

class RestaurantInventory implements RestaurantInventoryInterface {
  id: any;
  items = null;

  constructor(name: string) { }
}