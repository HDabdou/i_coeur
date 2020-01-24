import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FreeComponent } from '../free/free.component';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';


@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss'],
})
export class OrangeComponent implements OnInit {

  numero:number;
  montant:number;
  audio:any;
  reinitialiser(){
    this.numero=null;
    this.montant=null;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmer transactions',
      //subHeader: 'Subtitle',
      subHeader: 'Numéro : '+this.numero,
      message: 'Montant : '+this.montant+' Fcfa',
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
          this.valider()
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  valider(){
   
   this.localNotification.requestPermission().then(
      (permission) => {
        if (permission === 'granted') {
          this.audio = new Audio();
          this.audio.src ='./assets/icon/windows-8-sms.mp3';
          this.audio.play();
          // Create the notification
          var rep = this.localNotification.create('My Title', {           
            tag: 'message1',
            body: 'My body',
            icon: 'assets/icon/favicon.png',
          });
          console.log(rep);
          
        }
      }
    );
    /*this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });

    // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    this.push.createChannel({
    id: "testchannel1",
    description: "My first test channel",
    // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
    importance: 3
    }).then(() => console.log('Channel created'));

    // Delete a channel (Android O and above)
    this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));

    // Return a list of currently configured channels
    this.push.listChannels().then((channels) => console.log('List of channels', channels))

    // to initialize push notifications

    const options: PushOptions = {
      android: {},
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'https://airtime-1a636.firebaseapp.com'
      }
    }

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    console.log(this.push);
    console.log(pushObject);*/
    
  }
  constructor(private push:Push,public alertController: AlertController,private platform:Platform,private localNotification: PhonegapLocalNotification) { 
   
  }

  ngOnInit() {}

}
