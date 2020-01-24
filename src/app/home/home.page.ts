import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taille:number;
  t:any;
  constructor(private router:Router) { 
   
  }
  load(root){
    if(root == "orange"){
      this.router.navigate(['/orange']);
    }
    if(root == "free"){
      this.router.navigate(['/free']);
    }
    if(root == "expresso"){
      this.router.navigate(['/expresso']);
    }
  }

}
