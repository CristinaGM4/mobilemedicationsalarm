import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearalarmaComponent } from './crearalarma/crearalarma.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearcitaComponent } from './crearcita/crearcita.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { AlarmacreadaComponent } from './alarmacreada/alarmacreada.component';
import { CitacreadaComponent } from './citacreada/citacreada.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarmedicamentoComponent } from './agregarmedicamento/agregarmedicamento.component';
import { MedicamentocreadoComponent } from './medicamentocreado/medicamentocreado.component';

@NgModule({
  declarations: [									
    AppComponent,
      CrearalarmaComponent,
      InicioComponent,
      CrearcitaComponent,
      MedicamentosComponent,
      AlarmacreadaComponent,
      CitacreadaComponent,
      FooterComponent,
      AgregarmedicamentoComponent,
      MedicamentocreadoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
