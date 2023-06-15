import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { RestaurantInterface } from 'src/app/models/restaurant.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  restaurant: RestaurantInterface | undefined;

  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (!restaurantId) return;
    this.firestoreService.getRestaurantDetail(<string>restaurantId).subscribe(restaurant => {
      this.restaurant = restaurant;
    });
  }

  async deleteRestaurant(id: string | undefined, name: string | undefined): Promise<void> {

    if (!id || !name) {
      console.error("ID or NAME are UNDEFINED");
      return;
    }

    const alert = await this.alertController.create({
      message: `Are you sure you want to delete ${name}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.firestoreService.deleteRestaurant(id).then(() => {
              this.router.navigate(['/tabs/config/restaurant/read']);
            });
          },
        },
      ],
    })

    await alert.present();
  }

}
