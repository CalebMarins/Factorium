import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-titta',
  templateUrl: './titta.page.html',
  styleUrls: ['./titta.page.scss'],
})
export class TittaPage implements OnInit {
  
 
  constructor(
    private router: Router,
  ) { }
  
  tutorial(){
    this.router.navigate(['/tutorial'])
  }

  ngOnInit() {
  }

}
