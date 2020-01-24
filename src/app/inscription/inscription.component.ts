import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  montant :any;
  numero:any;
  etudiantOReleve:boolean = false;
  etatpeInscription:number = 1;

  checkEtude(arg){
    if(arg == "oui"){
      console.log(arg);
      
      this.etudiantOReleve = true;
    }
    if(arg == "non"){
      console.log(arg);
      this.etudiantOReleve = false;
    }
  }
  suivant(){
    this.etatpeInscription = 2;
  }
  precedant(){
    this.etatpeInscription = 1;
  }
  retour(){
    this.router.navigate(['/'])
  }
  constructor(private router:Router) { }

  ngOnInit() {}

}
