import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {PostI} from '../interfaces/post.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private itemsCollection: AngularFirestoreCollection<PostI>;
  items: Observable<PostI[]>;
  constructor(private afs: AngularFirestore)
   {
    this.itemsCollection = afs.collection<PostI>('post');
   // this.items = this.itemsCollection.valueChanges();
   this.items = this.itemsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as PostI;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))
    }

    ListPost()
    {
      return this.items;
    }

    addItem(item: PostI) {
      this.itemsCollection.add(item);
    }
}
