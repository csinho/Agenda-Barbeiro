import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})

export class CadastroPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  voltar() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}
