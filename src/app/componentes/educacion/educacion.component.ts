import { Component, OnInit } from '@angular/core';
import { EduTyp } from '../../modelos/educacion.model'
import { Form } from '@angular/forms';
import { SharedVarService } from 'src/app/service/service';

@Component({
  selector: 'educacion-componente',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  showEditButton = false;
  displayElement = true;
  educacion: EduTyp[] = [];

  constructor(private sharedService: SharedVarService) { }
  ngOnInit() {


    this.sharedService.getValue().subscribe((value) => {
      this.showEditButton = value;
    });
    this.educacion = [
      { id: 0, fecha: "1988", url: "https://www.ucab.edu.ve", urlTitle: "", img: "UCAB.png", text: "Licenciatura en Comunicación Social // Universidad Católica Andrés Bello." },
      { id: 1, fecha: "2005", url: "https://www.instagram.com/upel_caracas/?hl=es", urlTitle: "", img: "UPEL.png", text: "Componente Docente // Universidad Pedagógica Experimental Libertador." },
      { id: 2, fecha: "2010", url: "https://www.ujmv.edu/", urlTitle: "", img: "UJMV.png", text: "Programa de Formación de Educadores a Distancia // Universidad José María Vargas." },
      { id: 3, fecha: "2011", url: "https://www.sena.edu.co/es-co/Paginas/default.aspx", urlTitle: "", img: "SENA.jpeg", text: "Programación con HTML y Javascript // Servicio Nacional de Aprendizaje (SENA)." },
      { id: 4, fecha: "2011", url: "https://www.sena.edu.co/es-co/Paginas/default.aspx", urlTitle: "", img: "SENA.jpeg", text: "Planeación Estratégica de Proyectos // Servicio Nacional de Aprendizaje (SENA)." },
      { id: 5, fecha: "2011", url: "https://www.sena.edu.co/es-co/Paginas/default.aspx", urlTitle: "", img: "SENA.jpeg", text: "Diseño de Instrumentos de Evaluación // Servicio Nacional de Aprendizaje (SENA)." },
      { id: 6, fecha: "2012 - 2013", url: "https://www.sena.edu.co/es-co/Paginas/default.aspx", urlTitle: "", img: "/SENA.jpeg", text: "Inglés (Curso completo) Niveles I al V // Servicio Nacional de Aprendizaje (SENA).." },
      { id: 7, fecha: "2015", url: "https://learndigital.withgoogle.com/activate/courses", urlTitle: "", img: "GOOGLE-ACT.png", text: "Introducción al Desarrollo Web // Google Activate." },
      { id: 8, fecha: "2015", url: "https://www.msjc.edu/", urlTitle: "", img: "MSJC.png", text: "Fundamental English Writing // Mt. San Jacinto College." },
      { id: 9, fecha: "2017", url: "https://iei.ua.es/", urlTitle: "", img: "IEI-ALICANTE.jpg", text: "Curso de Desarrollo Web // Instituto de Economía Internacional de la Universidad de Alicante." },
      { id: 10, fecha: "2022 - 2022", url: "https://yoprogramo.org.ar/modulos-fase-1/", urlTitle: "", img: "SeProg.png", text: "#SéProgramar // Argentina Programa , INTI." },
      { id: 11, fecha: "2022 - Actual", url: "https://www.yoprogramo.org.ar/", urlTitle: "", img: "YoProg.png", text: "#YoProgramo // Argentina Programa , INTI." },
    ]
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  addEducation() {
    this.educacion.push({ id: this.educacion[this.educacion.length - 1].id + 1, fecha: "", url: "", urlTitle: "", img: "", text: "" });
  }

  deleteEducation(currentId: number) {
    const indexOfObject = this.educacion.findIndex(object => {
      return object.id === currentId;
    });

    this.educacion.splice(indexOfObject, 1);
  }

  saveEducation(myform: Form) { }
}
