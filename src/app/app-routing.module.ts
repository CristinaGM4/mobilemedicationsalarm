import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearalarmaComponent } from './crearalarma/crearalarma.component';
import { InicioComponent } from './inicio/inicio.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { CrearcitaComponent } from './crearcita/crearcita.component';
import { CitacreadaComponent } from './citacreada/citacreada.component';
import { AlarmacreadaComponent } from './alarmacreada/alarmacreada.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'crearalarma', component:CrearalarmaComponent},
  {path: 'medicamentos', component:MedicamentosComponent},
  {path: 'crearcita', component:CrearcitaComponent},
  {path: 'citacreada', component:CitacreadaComponent},
  {path: 'alarmacreada', component:AlarmacreadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
