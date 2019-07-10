import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {

  constructor(
    public navCtrl: NavController,
    public modal: ModalController,
    public navParams: NavParams) {
  }

  login() {

    let modal = this.modal.create("LoginPage");

    modal.onDidDismiss(data => {

      
    });

    modal.present();
  }


  signup() {

    let modal = this.modal.create("CadastroPage");

    modal.onDidDismiss(data => {
  

    });

    modal.present();
  }

}
