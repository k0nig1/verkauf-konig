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

    this.firestoreService.createRestaurant(
      this.createRestaurantForm.value.restaurantName
    )
      .then(
        () => {
          loading.dismiss();
        },
        (reason) => {
          console.error(reason);
        }
      )
      .finally(
        () => {
          this.router.navigate(['/tabs/config/restaurant']);
        }
      )

    return await loading.present();
  }

}