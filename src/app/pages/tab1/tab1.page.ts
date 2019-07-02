import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {CalendarComponent} from 'ionic2-calendar/calendar'

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private router : Router
  ) { }


  //Tópicos para criação de eventos
  event ={
    titulo:'',
    descricao:'',
    inicioEvento:'',
    fimEvento:'',
    diaTodo: false
  };
  minDate = new Date().toISOString();

  eventSource=[];


  calendar={
    mode:'month',
    currentDate : new Date()
  }
  viewTitle='';

  @ViewChild(CalendarComponent) calend : CalendarComponent;

  onEventSelected(){

  }

  onViewTitleChanged(){

  }

  onTimeSelected(){

  }

  ngOnInit() {
    this.resetEvent();
    this.china();
  }

  resetEvent(){
    this.event={
      titulo:'',
      descricao:'',
      inicioEvento : new Date().toISOString(),
      fimEvento : new Date().toISOString(),
      diaTodo : false
      };
  }
  china(){
    this.event={
      titulo:'Imersão China',
      descricao:'saldkasdlsakdlaskdasda',
      inicioEvento : "15/05/2019",
      fimEvento : "20/05/2019",
      diaTodo : true
      };
  }

}
