import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugardois',
  templateUrl: './lugardois.page.html',
  styleUrls: ['./lugardois.page.scss'],
})
export class LugardoisPage implements OnInit {

  constructor(
    private router : Router
  ) { }

tab3(){
    this.router.navigate(['master/tabs/tab3'])
  }
  
  ngOnInit() {
  }

}
