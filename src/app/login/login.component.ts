import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passcode:string = "";
  passcheck:string;
  constructor(private router:Router,private pinCheck: PinCheck,private loadingController: LoadingController,private alertController: AlertController) { }
  inscription(){
    this.router.navigate(['/inscription']);
  }
  add(v){
    if(this.passcode.split("").length < 4){
      this.passcode =this.passcode+v;
    }
    if(this.passcode.split("").length === 4){
      this.passcheck =this.passcode;
      this.presentLoading();
      this.init();
    }

    
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      if(this.passcheck == "1234"){
        loading.dismiss();
        this.router.navigate(['/home']);
      }else{
        this.pinErrorAlert()
        loading.dismiss();
        
      }
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();

  }
  async pinErrorAlert() {
    const alert = await this.alertController.create({
      header: 'code pin incorrect',
      //subHeader: 'Subtitle',
      subHeader: "verifié le code pin ou cliquer code pin oublié pour changer votre code pin",
    
      buttons: [ {
        text: 'OK',
        cssClass: 'success',
        handler: () => {
          //this.valider()
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
 
  delete(){
     this.passcode = this.passcode.substring(0,this.passcode.split("").length -1)
  }
  init(){
    this.passcode ="";
  }
   
  ngOnInit() {
  }

}
