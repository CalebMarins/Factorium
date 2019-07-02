import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(
    private afAuth : AngularFireAuth,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) {
   }

   dadosProfile(){
     this.afAuth.authState.subscribe(data=>{
       
     })
   }

  ngOnInit() {
  }
  async signOut() {
    //Load de processamento
    let loadOut = await this.loadingController.create({
     message: 'Encerrando sessão',
   });
   //Alert Confirmação
   const alertConfirma = await this.alertController.create({
     header: 'Encerrar sessão',
     message: 'Tem certeza que deseja sair?',
     buttons: [
       {
         text: 'Sim, quero sair',
         handler: () => {
           
           this.router.navigate(['/login'])
           
         }
       },
       {
         text: 'Cancelar',
         handler: () => {
         }
       }
     ]
   });
   
   alertConfirma.present();
  }

}
