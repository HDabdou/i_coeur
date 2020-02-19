import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FreeComponent } from '../free/free.component';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss'],
})
export class OrangeComponent implements OnInit {

  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  constructor(private router:Router) { 
   
  }
  checkAccidant(rep:any){
    if(rep == 'oui'){
      this.Accidant =true;
    }
    if(rep == "non"){
      this.Accidant = false;
    }
  }
  checkSOusAVK(rep:any){
    if(rep == 'oui'){
      this.checkAVK =true;
    }
    if(rep == "non"){
      this.checkAVK = false;
    }
  }
  ngOnInit() {}
}
