import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public user: any;

  public items: Array<Object> = [];

  constructor(public navCtrl: NavController) {

    this.items = [
      {
        "icon": "md-notifications-outline",
        "item": "Notificações"
      },
      {
        "icon": "md-card",
        "item": "Pagamentos"
      }
    ];

    this.user = {
      "nome_user": "Emerson Silva",
      "banner": "/assets/imgs/banner.jpg",
      "img": "/assets/imgs/user.jpeg",
    };

  }




}
