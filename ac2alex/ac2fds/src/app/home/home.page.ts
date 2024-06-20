import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    temperatura1 =parseInt('');
    temperatura2 =parseInt('');
    temperatura3 =parseInt('');
    temperatura4 =parseInt('');
    media =parseInt('');

  constructor(public router:Router) {}

  calcularMedia(){
    this.media = (this.temperatura1 + this.temperatura2 + this.temperatura3 + this.temperatura4)/4
  }

  abrirTela(){
    this.router.navigateByUrl(
      `/fruta-adequada/${this.media}`
    );
  }

}
