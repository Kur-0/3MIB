import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  juros = 0;
  valorJuros=0;
  emprestimo = 0;
  parcelas = 0;
  qntMeses=0;
  total=0;


constructor() {}

calcularPrestacao() {
  this.valorJuros = this.emprestimo * (this.juros / 100)
  this.parcelas = this.emprestimo + this.valorJuros / this.qntMeses;
}

calcularTotal() {
  this.total = this.parcelas * this.qntMeses;
  }

}
