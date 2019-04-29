import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthProvider } from '../../../providers/auth';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'master',
      url: '/menu/master'
    },
    {
      title: 'um',
      url: '/menu/um'
    },
    {
      title: 'dois',
      url: '/menu/dois'
    },
    {
      title: 'tres',
      url: '/menu/tres'
    },
    {
      title: 'quatro',
      url: '/menu/quatro'
    },
    {
      title: 'cinco',
      url: '/menu/cinco'
    }
  ];
  selectedPath = '';

  constructor(
    private router: Router,
    private authProvider: AuthProvider,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
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

  ngOnInit() {
  }

}
