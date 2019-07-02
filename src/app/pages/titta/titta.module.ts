import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TittaPage } from './titta.page';

const routes: Routes = [
  {
    path: '',
    component: TittaPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TittaPage]
})
export class TittaPageModule {}
