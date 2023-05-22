import { Injectable, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, collectionData, collection, getDocs } from '@angular/fire/firestore';

import { initializeApp } from 'firebase/app';
import { DocumentData, getFirestore } from 'firebase/firestore';

import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private app: FirebaseApp;
  private db: Firestore = inject(Firestore);

  constructor(private firestore: Firestore) {
    this.app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  getRestaurantMenu(retaurant: string): string {
    try {
      let menuCollection = collection(this.db, 'menuItems');
      // return collectionData(menuCollection)
      //   .pipe(
      //     map(menuItems => menuItems as MenuItem[])
      //   );
    }
    catch {
      console.error("[ERROR] Could not get Menu Items!");
    }
    return "yaya"!;
  }
}
