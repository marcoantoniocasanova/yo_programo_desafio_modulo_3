import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { ExpTyp } from '../../modelos/experiencia.model'





@Component({
  selector: 'experiencia-component',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  displayElement = false;
  experience: ExpTyp[] = [];

  constructor() { }
  ngOnInit() {
    this.experience = [
      { id: 0, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Profesor de aula virtual en la Universidad José María Vargas." },
      { id: 1, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Redactor y curador en Univista TV." },
      { id: 2, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Profesor de Redacción en el Instituto de Mercadotecnia.." },
      { id: 3, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Profesor de Redacción en la Universidad Alejandro de Humboldt.." },
      { id: 4, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Profesor de redacción en la Universidad Santa María.." },
      { id: 5, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Redactor de contenidos en la Universidad Nacional Abierta." },
      { id: 6, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Redactor de contenidos en CAVECOL." },
      { id: 7, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Redactor de noticias en la emisora de radio Caliente Estéreo FM 105.9." },
      { id: 8, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "Experiencia.png", text: "Redactor de contenidos en el Centro Audivisual Salesiano.." },
    ]
  }

  addExperience() {
    this.experience.push({ id: this.experience.length + 1, fecha: "", url: "", urlTitle: "", img: "", text: "" });
  }

  updateExperience(myForm: Form) {
  }

  deleteExperience(id: number) {
  }
}