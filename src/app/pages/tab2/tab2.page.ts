import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(
    private router: Router,
  ) {}

  lugarum(){
    this.router.navigate(['/lugarum'])
  }

  lugardois(){
    this.router.navigate(['/lugardois'])
  }

  tab1(){
    this.router.navigate(['master/tabs/tab1'])
  }

  titta(){
    this.router.navigate(['/tutorial'])
  }

  tittan(){
    this.router.navigate(['/tutorial-t'])
  }

  ngOnInit() {
  }

}
