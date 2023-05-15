import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './componentes/navbar/navbar.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabblandasComponent } from './componentes/habblandas/habblandas.component';
import { HabdurasComponent } from './componentes/habduras/habduras.component';
import { HolafotoComponent } from './componentes/holafoto/holafoto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AcercademiComponent,
    CarouselComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabblandasComponent,
    HabdurasComponent,
    HolafotoComponent,
    FooterComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
