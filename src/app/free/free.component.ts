import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss'],
})
export class FreeComponent implements OnInit {

  numero:number;
  montant:number;
  reinitialiser(){
    this.numero=null;
    this.montant=null;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmer transactions',
      //subHeader: 'Subtitle',
      subHeader: 'Numéro : '+this.numero,
      message: '.Montant : '+this.montant+' Fcfa',
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Valider',
        cssClass: 'success',
        handler: () => {
          this.valider();
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  valider(){
    console.log(this.numero+" "+this.montant);
    
  }
  constructor(public alertController: AlertController,private modalController:ModalController) { 
    
  }

  ngOnInit() {}


}
