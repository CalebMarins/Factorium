import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugarum',
  templateUrl: './lugarum.page.html',
  styleUrls: ['./lugarum.page.scss'],
})
export class LugarumPage implements OnInit {

  constructor(
    private router : Router,
  ) { }
  tab3(){
    this.router.navigate(['master/tabs/tab3'])
  }
  ngOnInit() {
  }

}
