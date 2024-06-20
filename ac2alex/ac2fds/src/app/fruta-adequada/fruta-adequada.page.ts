import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruta-adequada',
  templateUrl: './fruta-adequada.page.html',
  styleUrls: ['./fruta-adequada.page.scss'],
})
export class FrutaAdequadaPage implements OnInit {

    media:any;
    culturas: any[] = [];

    temperaturaCulturas = [
      { name: 'Morango', temperaturaMinima: 15, temperaturaMaxima: 25 },
      { name: 'Cacto', temperaturaMinima: 20, temperaturaMaxima: 50},
      { name: 'Laranja', temperaturaMinima: 15, temperaturaMaxima: 30},
      { name: 'Abacaxi', temperaturaMinima: 22, temperaturaMaxima: 32},
      { name: 'Pitaya', temperaturaMinima: 20, temperaturaMaxima: 30},
      { name: 'Fruta do Conde', temperaturaMinima: 20, temperaturaMaxima: 30},
      { name: 'Banana', temperaturaMinima: 15, temperaturaMaxima: 35},
      { name: 'Manga', temperaturaMinima: 24, temperaturaMaxima: 30},
      { name: 'Couve', temperaturaMinima: 0, temperaturaMaxima: 28},
      { name: 'Maçã', temperaturaMinima: 18, temperaturaMaxima: 25}
    ];


  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.media = this.activatedRoute.snapshot.paramMap.get('media');
    this.ChecarTemperatura();
  }

  ChecarTemperatura(){
    this.culturas = this.temperaturaCulturas.filter(planta => this.media >= planta.temperaturaMinima && this.media <= planta.temperaturaMaxima)
  }


}
