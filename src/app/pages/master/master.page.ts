import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AlertController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {

  constructor(
    private router : Router,
    private afAuth : AngularFireAuth,
    private toastController : ToastController,
    private alert : AlertController,
  ) { }

  
   
   
  ngOnInit() {
  }

}
