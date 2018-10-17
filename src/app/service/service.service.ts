import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  contactosRef: AngularFireList<any[]>;
  contactos: Observable<any[]>;
  reviewRef: AngularFireList<any[]>;
  reviews: Observable<any[]>;


  constructor(db: AngularFireDatabase) {
    this.contactosRef = db.list('contactos');
    this.reviewRef = db.list('opiniones');
    // Use snapshotChanges().map() to store the key
  }

// contactos
  getContactos() {
    this.contactos = this.contactosRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
    return this.contactos;
  }

  updateContacto(key, contacto) {
    this.contactosRef.update(key, contacto);
  }

  addContacto(contacto) {
    this.contactosRef.push(contacto);
  }

  deleteContacto(key) {
    this.contactosRef.remove(key);
  }

// reviews
  getReviews() {
    this.reviews = this.reviewRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
    return this.reviews;
  }

  addReview(review) {
    this.reviewRef.push(review);
  }
}
