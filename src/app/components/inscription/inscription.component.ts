import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public nom : string = "";
  public prenom : string = "";
  public email : string = "";
  public sexe : string = "M";
  public institution : string = "";
  public adresse : string = "";
  public pays : string = "";
  public code : string = "";
  public ville : string = "";
  public pageP : string = "";
  public pageI : string = "";
  public inscription : string = "150";
  public hebergement : string = "150";

  public title : string = "";
  public formDisabled: boolean = false;
  public listError:any = [];
  public msgObligatoire :string = "Formulaire %FORMULAIRE% obligatoire ";
  formCorriger: boolean = false;
  listRecap: boolean = false;

  listInscription = [{
    "id": '150',
    "text": "Etudiant",
    "checked": true

  }, {
    "id": '200',
    "text": "Academique",
    "checked": false
  }, {
    "id": '300',
    "text": "Entreprise",
    "checked": false

  }]

  listHebergement = [{
    "id": '150',
    "text": " Avec reservation"
  }, {
    "id": '200',
    "text": " Sans reservation"
  }]

  total: number = 0;
  btnValid: boolean = true;
  libelleIns: string = "";
  libelleHeb: string = "";


  constructor() { 
  
  }

ngOnInit() {
  this.title = "Inscription pour #MaConf2020";
  console.log(this.listHebergement)
}

preValidation(){
  console.log("xxxxx");

  this.listError = [];


  if(this.nom == ""){
    let formObligatoire = "Nom";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }

  if(this.prenom == ""){
    let formObligatoire = "Prenom";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }
  if(this.email == ""){
    let formObligatoire = "Email";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }
  if(this.institution == ""){
    let formObligatoire = "Institution";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }
  if(this.adresse == ""){
    let formObligatoire = "Adresse";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }

  if(this.pays == ""){
    let formObligatoire = "Pays";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }
  if(this.code == null){
    let formObligatoire = "Code";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }
  if(this.ville == ""){
    let formObligatoire = "Ville";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }

  if(this.ville == ""){
    let formObligatoire = "Inscription";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }

  if(this.ville == ""){
    let formObligatoire = "Ville";
    let msg = this.msgObligatoire.replace("%FORMULAIRE%", formObligatoire);
    this.listError.push(msg)
  }

  if(this.listError.length == 0){
    this.formDisabled = true;
    this.formCorriger = false;
    this.listRecap = true;
    this.total = Number(this.inscription) + Number(this.hebergement);
    this.btnValid = false;

    let resIns = this.listInscription.filter(_=>_.id == this.inscription);
    this.libelleIns = resIns[0].text;

    let resHeb = this.listHebergement.filter(_=>_.id == this.hebergement);
    this.libelleHeb = resHeb[0].text;

  }else{
    this.formDisabled = false;
    this.formCorriger = true;
    this.listRecap = false;
    this.total = 0;
  }
 

}

modifierDonner(){
  this.formDisabled = false;
  this.formCorriger = true;
  this.listRecap = false;
  this.btnValid = true;

}

confirmerDonner(){
  Swal.fire('Votre inscription a été confirmée!')

  this.nom = "";
  this.prenom  = "";
  this.email  = "";
  this.sexe  = "M";
  this.institution  = "";
  this.adresse = "";
  this.pays = "";
  this.code = "";
  this.ville = "";
  this.pageP  = "";
  this.pageI = "";
  this.inscription  = "150";
  this.hebergement = "150";

  this.formDisabled = false;
  this.formCorriger = false;
  this.listRecap = false;
  this.btnValid = true;

}

}
