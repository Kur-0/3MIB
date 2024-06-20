import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaAdequadaPage } from './fruta-adequada.page';

const routes: Routes = [
  {
    path: '',
    component: FrutaAdequadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutaAdequadaPageRoutingModule {}
