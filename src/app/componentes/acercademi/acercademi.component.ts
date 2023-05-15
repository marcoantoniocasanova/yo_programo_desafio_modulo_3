import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'acercademi-component',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.scss']
})
export class AcercademiComponent implements OnInit {
  displayElement = true;
  titulo: string = "";
  texto: string = "";

  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log("oninit");
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
  /*     "id": 1,
      "name": "macd",
      "pass": "123",
      "first_name": "Marco",
      "last_name": "Casanova",
      "birthday": "08.03.1963",
      "about_me": "Soy Licenciado en Comunicación Social y he trabajado como redactor de contenidos para varias empresas.\n          También tengo varios años de experiencia docente. En los últimos tiempos, he querido cumplir mi sueño de entender y abordar la programación.\n          Encontré la forma de satisfacer mis necesidades de adquirir destrezas informáticas a través de los cursos de Argentina Programa.\n          Gracias a esta plataforma, encontré una valiosa oportunidad para desarrollar conocimientos y habilidades que me permitirán seguir\n          adquiriendo y desarrollando lo que necesito para lograr desempeñarme exitosamente como Programador Full Stack Jr",
      "description": "¡Es un gusto tenerte por aquí! Mi nombre es Marco Antonio Casanova. Desde pequeño me\n      encantan los videojuegos. Por esta razón, siempre me ha interesado saber\n      lo que pasa tras los bastidores del mundo de la programación.",
      "hobbies": "futbal, nadar, ver series en netflix, pasear en la naturaleza",
      "created_at": "10.05.2023"
    }
   */
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
