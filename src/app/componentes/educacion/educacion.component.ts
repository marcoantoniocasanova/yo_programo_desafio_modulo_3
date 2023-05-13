import { Component, OnInit } from '@angular/core';
import { EduTyp } from '../../modelos/educacion.model'
import { Form } from '@angular/forms';

@Component({
  selector: 'educacion-componente',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
displayElement = true;
educacion: EduTyp[] = [];

constructor() { }
ngOnInit() {
  this.educacion = [
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
