import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  desconto = 0;
  precoOriginal = 0;
  precoComDesconto = 0;

constructor() {}

calcularPrecoComDesconto() {
  this.precoComDesconto = this.precoOriginal - (this.precoOriginal * (this.desconto / 100));
}

}
