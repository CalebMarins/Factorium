import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-t',
  templateUrl: './tutorial-t.page.html',
  styleUrls: ['./tutorial-t.page.scss'],
})
export class TutorialTPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  // Redirecionado à página Tittan
  tittan(){
  this.router.navigate(['master/tabs/tab4'])
  }

  ngOnInit() {
  }

}
