import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passcode:string = "";
  constructor(private router:Router,private pinCheck: PinCheck,private loadingController: LoadingController) { }
  inscription(){
    this.router.navigate(['/inscription']);
  }
  add(v){
    if(this.passcode.split("").length < 4){
      this.passcode =this.passcode+v;
    }
    if(this.passcode.split("").length === 4){
      this.presentLoading();
      this.init();
    }

    
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
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
