import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  async openLoginModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    return await modal.present();
  }
}
