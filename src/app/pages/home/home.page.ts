import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// presentModal=any;
  constructor(public modalController: ModalController) {}

}
// async presentModal() {
//   const modal = await this.modalController.create({
//     component: ModalPage,
//     componentProps: {
//       'firstName': 'Douglas',
//       'lastName': 'Adams',
//       'middleInitial': 'N'
//     }
//   });
//   return await modal.present();
// }

