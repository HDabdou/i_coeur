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
  montant:any;
  numero:any;
  checkEtude:any;
  operation:boolean =false;
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
  traitement =[
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
    {medicament:"sfdjhsh",dose:"12p",posologie:"454fff"},
  ]
  checkOperation(rep:any){
    if(rep == "oui"){
      this.operation = true;
    }
    if(rep == "non"){
      this.operation = false;
    }
  }

}
