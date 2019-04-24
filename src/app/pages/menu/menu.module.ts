import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage, 
    children: [
      {
        path:'master',
        loadChildren: '../master/master.module#MasterPageModule'
      },
      {
        path: 'um',
        loadChildren: '../dia1/dia1.module#Dia1PageModule'
      },
      {
        path: 'dois',
        loadChildren: '../dia2/dia2.module#Dia2PageModule'
      },
      {
        path: 'tres',
        loadChildren: '../dia3/dia3.module#Dia3PageModule'
      },
      {
        path: 'quatro',
        loadChildren: '../dia4/dia4.module#Dia4PageModule'
      },
      {
        path: 'cinco',
        loadChildren: '../dia5/dia5.module#Dia5PageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
