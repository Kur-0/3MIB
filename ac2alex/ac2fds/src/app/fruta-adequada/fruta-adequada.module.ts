import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutaAdequadaPageRoutingModule } from './fruta-adequada-routing.module';

import { FrutaAdequadaPage } from './fruta-adequada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutaAdequadaPageRoutingModule
  ],
  declarations: [FrutaAdequadaPage]
})
export class FrutaAdequadaPageModule {}
