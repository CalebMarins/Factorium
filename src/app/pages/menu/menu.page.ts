import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

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
  selectedPath='';

  constructor(private router: Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url){
        this.selectedPath= event.url;
      }
    });
  }

  ngOnInit() {
  }

}
