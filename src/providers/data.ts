import { Injectable } from "@angular/core";
import {
    AngularFirestore
} from 'angularfire2/firestore';

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

    //Pegando dados do usuário
    getTittanRcords(){
        return new Promise ((resolve, reject)=>{
            this.afs.firestore.collection('Tittan').get()
            .then((r)=>{
                let array = [];
                r.forEach((d)=> {
                    let item = d.data();
                    console.log(item);
                    item.uid = d.id;
                    array.push(item);
                })
            })
        })
    }
    
}

