import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearalarmaComponent } from './crearalarma/crearalarma.component';

const routes: Routes = [
  {path: 'crearalarma', component:CrearalarmaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
