import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, deleteDoc } from '@angular/fire/firestore';
import { RestaurantInterface } from 'src/app/models/restaurant.interface';
import { Observable } from 'rxjs';

/**
 * Enumeration of hardcoded firebase collections
 */
enum DataCollections {
  restaurants = 'restaurants'
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);
  private data: Observable<RestaurantInterface[]> | null = null;

  constructor() { }
  /**
   * 
   * @param restaurant 
   * @returns Promise<any>
   */
  createRestaurant(name: string): Promise<any> {
    var inventory = null;

    const restaurantCollection = collection(this.firestore, DataCollections.restaurants);
    return addDoc(restaurantCollection, <RestaurantInterface>{
      name,
      inventory
    });
  }

  /**
   * 
   * @returns Observable<RestaurantInterface[] or undefined>
   */
  readRestaurants(): Observable<RestaurantInterface[]> | undefined {

    try {
      const restaurantCollection = collection(this.firestore, DataCollections.restaurants);

      console.log("restaurantCollection: " + restaurantCollection);

      this.data = collectionData(restaurantCollection, {
        idField: 'id'
      }) as Observable<RestaurantInterface[]>;

      console.log("Data: " + this.data);
      return this.data;
    }
    catch (ex) {
      console.error(ex);
      return undefined;
    }

  }

  getRestaurantDetail(restaurantId: string): Observable<RestaurantInterface> {
    const restaurantRef = doc(this.firestore, `${DataCollections.restaurants}/${restaurantId}`);
    return docData(restaurantRef, {
      idField: 'id'
    }) as Observable<RestaurantInterface>;

  }

  deleteRestaurant(id: string): Promise<void> {
    const restaurantDocRef = doc(this.firestore, `${DataCollections.restaurants}/${id}`);
    return deleteDoc(restaurantDocRef);
  }
}
