import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  splash = true;
  login = true;
  cadastro = false;



  constructor() { }

  //Exibir form de Cadastro
  exibirCadastro() {
    this.login = false;
    this.cadastro = true;
  }

  //Exibir form de Cadastro
  exibirLogin() {
    this.login = true;
    this.cadastro = false;
  }






  ngOnInit() {
    //Splash Screen
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }


}

