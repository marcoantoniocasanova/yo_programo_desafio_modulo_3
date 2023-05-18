import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedVarService } from 'src/app/service/service';


@Component({
  selector: 'acercademi-component',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.scss']
})
export class AcercademiComponent implements OnInit {
  displayElement = true;
  showEditButton = false;
  titulo: string = " Primero la redacción, luego la programación y... ¡después existo!";
  texto: string = `Soy Licenciado en Comunicación Social y he trabajado como redactor de contenidos para
  varias empresas.
  También tengo varios años de experiencia docente. En los últimos tiempos, he querido cumplir mi sueño de entender
  y abordar la programación.
  Encontré la forma de satisfacer mis necesidades de adquirir destrezas informáticas a través de los cursos de
  Argentina Programa.
  Gracias a esta plataforma, encontré una valiosa oportunidad para desarrollar conocimientos y habilidades que me
  permitirán seguir
  adquiriendo y desarrollando lo que necesito para lograr desempeñarme exitosamente como Programador Full Stack Jr.`;

  constructor(private http: HttpClient, private sharedService: SharedVarService) { }
  ngOnInit() {

    this.sharedService.getValue().subscribe((value) => {
      this.showEditButton = value;
    });
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key'
    });
    this.http
      .get<any>('https://express-js-service-api-cv.onrender.com/users/1', {
        headers: headers
      })
      .subscribe(data => {
        this.titulo = 'Hola! ' + data.data.first_name + ' ' + data.data.last_name
        this.texto = data.data.description;
      });
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  updateAcercademiTitle(event: any) {
    this.titulo = event.target.value
  }

  updateAcercademiTexto(event: any) {
    this.texto = event.target.value
  }
}
