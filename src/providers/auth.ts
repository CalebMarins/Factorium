import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx'
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Injectable() export class AuthProvider {
    constructor(private afAuth: AngularFireAuth, private google: GooglePlus, private platform: Platform) {

    }

    //Cadastro
    cadastro = (data) => this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);

    //Login
    login = (data) => this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);

    //Esqueci a senha
    resetPass(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    loginGoogle() {
        this.google.login({
            'webClientId': '361804294742-pf81vm15cfejsrad7psarutul0fobv9s.apps.googleusercontent.com',
            'offline': true
        }).then((res) => {
            firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.IdToken))
            .then((suc) => {
                alert("LOGIN SUCCESS")
            }).catch((ns) => {
                alert("LOGIN DEU RUIM IRMÃO")
            })
        })
    }
}