import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, getDoc, collection, collectionData } from '@angular/fire/firestore';
import { RestaurantInterface } from 'src/app/models/restaurant.interface';
import { Observable } from 'rxjs';

enum DataCollections {
  restaurants = 'restaurants'
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  createRestaurant(restaurant: RestaurantInterface): Promise<any> {
    const restaurantCollection = collection(this.firestore, DataCollections.restaurants)
    return addDoc(restaurantCollection, { restaurant });
  }

  readRestaurants(): Observable<RestaurantInterface[]> | undefined {
    let data: Observable<RestaurantInterface[]>;

    try {
      const restaurantCollection = collection(this.firestore, DataCollections.restaurants);

      data = collectionData(restaurantCollection, {
        idField: 'id'
      }) as Observable<RestaurantInterface[]>;

      console.log("Data: " + data);
      return data;
    }
    catch (ex) {
      console.error(ex);
      data = new Observable<RestaurantInterface[]>;
      return undefined;
    }
  }
}
