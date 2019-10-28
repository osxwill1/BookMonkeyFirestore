import { Injectable } from '@angular/core';
import { Book } from './book';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private itemsCollection: AngularFirestoreCollection<Book>;

  items: Observable<Book[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Book>('books');
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.items = this.itemsCollection.valueChanges();
  }

   getAll(): Observable<Book[]> {
     return this.items = this.itemsCollection.valueChanges();
   }


//   getSingle(isbn: string): Observable<Book> {
//    return this.items .get<any>(
//      `${this.api}/book/${isbn}`
//    );
//   }

}



