import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'acercademi-component',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.scss']
})
export class AcercademiComponent implements OnInit {
  displayElement = true;
  titulo: string = "";
  texto: string = "";

  constructor() { }
  ngOnInit() {
    this.titulo = "Hola! Marco Casanova"
    this.texto = `¡Es un gusto tenerte por aquí! Mi nombre es Marco Antonio Casanova. Desde pequeño me
    encantan los videojuegos. Por esta razón, siempre me ha interesado saber
    lo que pasa tras los bastidores del mundo de la programación`;
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  updateAcercademiTitle(event: any){

    this.titulo = event.target.value

  }


  updateAcercademiTexto(event: any) {
    this.texto  = event.target.value
  }
}
