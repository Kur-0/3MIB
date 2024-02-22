import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  AC='';
  AT='';
  AGH='';
  res=0;

  calcularMedia(){
    this.res = parseFloat(this.AC) * 0.2 + parseFloat(this.AGH)* 0.1 + parseFloat(this.AT)*0.7;
  }
}
