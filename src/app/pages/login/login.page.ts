import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import {AuthProvider} from '../../../providers/auth';
import {FirebaseProvider} from '../../../providers/data';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  splash = true;
  login = true;
  esqueceu = false;
  cadastro = false;

  loginForm = {
    email: '',
    password: ''
  }

  esqueceuForm = {
    email: '',
  }

  cadastroForm = {
    nome: '',
    email: '',
    senha: ''
  }





  constructor(
    private authProvider : AuthProvider,
    private firebaseProvider : FirebaseProvider,
    private loadingController : LoadingController,
    private alertController : AlertController
  ) { }

  //Exibir form de Cadastro
  exibirCadastro() {
    this.login = false;
    this.cadastro = true;
    this.esqueceu = false;
  }

  exibirEsqueceu() {
    this.login = false;
    this.esqueceu = true;
  }

  //Exibir form de Login
  exibirLogin() {
    this.login = true;
    this.cadastro = false;
    this.esqueceu = false;
  }

  

  //Login
  async fazerLogin(){
    
    let load = await this.loadingController.create({
      message: 'Realizando Login',
    });
    await load.present();
    this.authProvider.login(this.loginForm)
    .then((res)=>{
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  //Cadastro
  async fazerCadastro(){
    //Load de processando
    let load = await this.loadingController.create({
      message: 'Realizando Cadastro',
    });
    await load.present();
    
    //Alert de sucesso
    const alertSucesso = await this.alertController.create({
      header: 'Sucesso',
      subHeader: 'Cadastro efetuado com sucesso!',
      message: 'Efetue o login para continuar',
      buttons: ['OK']
    });

    //Alert de falha1 - Email já está em uso
    const alertFail1 = await this.alertController.create({
      header: 'Falha',
      message: 'Esse email já sendo utilizado!',
      buttons: ['OK']
    });

    //Alert de falha2 - email inválido
    const alertFail2 = await this.alertController.create({
      header: 'Falha',
      message: 'Email inválido!',
      buttons: ['OK']
    });

    //Alert de falha3 - operação não permitida
    const alertFail3 = await this.alertController.create({
      header: 'Falha',
      message: 'Operação não permitida!',
      buttons: ['OK']
    });

    //Alert de falha4 - Senha muito fraca
    const alertFail4 = await this.alertController.create({
      header: 'Falha',
      message: 'Sua senha está muito fraca!',
      buttons: ['OK']
    });

    
    this.authProvider.cadastro(this.cadastroForm)
    .then((res)=>{
      
      let uid = res.user.uid;

      //Organizar dados
      let data= {
        uid: uid,
        nome: this.cadastroForm.nome,
        email: this.cadastroForm.email,
      };

      //Gravar user no firestore
      this.firebaseProvider.postuser(data)
      .then(()=>{
        load.dismiss();
        alertSucesso.present();
        this.exibirLogin();
      })
    })
    .catch((erro)=>{
      load.dismiss();
      if(erro.code=='auth/email-already-in-use'){
        alertFail1.present();
      }
      else if(erro.code=='auth/invalid-email'){
        alertFail2.present();
      }
      else if(erro.code=='auth/operation-not-allowed'){
        alertFail3.present();
      }
      else{
        alertFail4.present();
      }
      
    })
  }


  ngOnInit() {
    //Splash Screen
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }


}

