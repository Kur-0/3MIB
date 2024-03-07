import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}



  Celsius = '';
  Fahrenheit = '';
  newcelsius = 0;
  newfahrenheit =0;

  celsiuspfahrenheit(){
    this.newcelsius=((9*(parseFloat(this.Celsius))+160)/5)
  }

  fahrenheitpcelsius(){
    this.newfahrenheit=(((parseFloat(this.Fahrenheit))-32)*(5/9))
  }




  notaum=0;
  notadois=0;
  notatres=0;
  notaquatro=0;
  media=0;

  calcMedia(){
    this.media = (Number(this.notaum)+Number(this.notadois)+Number(this.notatres)+Number(this.notaquatro))/4;
  }



  ladoum=0;
  ladodois=0;
  ladotres=0;
  Triangulo=0;

  calcTriangulo(){
    if(this.ladoum < this.ladodois + this.ladotres && this.ladodois < this.ladoum + this.ladotres && this.ladotres < this.ladoum + this.ladodois){

    if(this.ladoum == this.ladodois && this.ladoum == this.ladotres){
      alert("Equilatero")
    }
    else if (this.ladoum == this.ladodois && this.ladotres != this.ladoum || this.ladoum == this.ladotres && this.ladodois != this.ladotres || this.ladodois == this.ladotres && this.ladodois != this.ladoum){
      alert("Isóceles")
    }

    else{
      alert("Escaleno")
    }

  }else{
    //nao forma tri
    alert("Um dos lados está desproporcionalmente grande, isso não é um triângulo!")
  }
  }
}
