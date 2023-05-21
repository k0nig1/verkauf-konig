import { Injectable, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, collectionData, collection, getDocs } from '@angular/fire/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

  getRestaurantMenuItems(): Observable<MenuItem[]> {
    try {
      let menuItemsCollection = collection(this.db, 'menuItems');
      return collectionData(menuItemsCollection)
        .pipe(
          map(menuItems => menuItems as MenuItem[])
        );
    }
    catch {
      console.error("[ERROR] Could not get Menu Items!");
    }
  }
}
