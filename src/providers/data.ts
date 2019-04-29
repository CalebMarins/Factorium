import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { getDefaultService } from 'selenium-webdriver/edge';

@Injectable() export class FirebaseProvider {
    constructor(private afs: AngularFirestore) { }

    //Criando usuários no firebase
    postuser = data => this.afs
        .collection("Users")
        .doc(data.uid)
        .set(data);

    getUser(uid) {
        return this.afs.firestore.collection('User')
            .doc(uid)
            .get();
    }
    
}

