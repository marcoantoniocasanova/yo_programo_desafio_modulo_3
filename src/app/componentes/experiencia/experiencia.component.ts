import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ExpTyp } from '../../modelos/experiencia.model'

@Component({
  selector: 'experiencia-component',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  displayElement = true;
  experience: ExpTyp[] = [];

  constructor() { }
  ngOnInit() {
    this.experience = [
      { id: 0, fecha: "2010 - 2022", url: "https://www.ujmv.edu/", urlTitle: "", img: "assets/images/UJMV.png", text: "Profesor de aula virtual en la Universidad José María Vargas." },
      { id: 1, fecha: "2020 - 2023", url: "https://www.youtube.com/@UniVistaTV/about/", urlTitle: "", img: "src/assets/images/Logo UniVista.jpeg", text: "Redactor y curador en Univista TV." },
      { id: 2, fecha: "2013 - 2016", url: "https://www.isum.com.ve", urlTitle: "", img: "assets/images/ISUM.png", text: "Profesor de Redacción en el Instituto de Mercadotecnia.." },
      { id: 3, fecha: "2009 - 2016", url: "https://www.instagram.com/unihumboldt/?hl=en", urlTitle: "", img: "images/UAH.png", text: "Profesor de Redacción en la Universidad Alejandro de Humboldt.." },
      { id: 4, fecha: "2006 - 2016", url: "https://usm.edu.ve/", urlTitle: "", img: "images/USM.png", text: "Profesor de redacción en la Universidad Santa María.." },
      { id: 5, fecha: "2003 - 2006", url: "https://www.instagram.com/una.edu.ve/", urlTitle: "", img: "images/UNA.jpeg", text: "Redactor de contenidos en la Universidad Nacional Abierta." },
      { id: 6, fecha: "2000 - 2002", url: "https://www.cavecol.org/", urlTitle: "", img: "images/logo_cavecol.png", text: "Redactor de contenidos en CAVECOL." },
      { id: 7, fecha: "1995 - 1999", url: "https://www.calientefm.com.ve", urlTitle: "", img: "images/Caliente Stereo 105.9 FM.png", text: "Redactor de noticias en la emisora de radio Caliente Estéreo FM 105.9." },
      { id: 8, fecha: "1989 - 2000", url: "https://salesianosvenezuela.com", urlTitle: "", img: "images/CAS.png", text: "Redactor de contenidos en el Centro Audivisual Salesiano.." },
    ]
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  addExperience() {
    this.experience.push({ id: this.experience[this.experience.length - 1].id + 1, fecha: "", url: "", urlTitle: "", img: "", text: "" });
  }

  updateExperience(id: number, fecha: string, url: string, urlTitle: string, img: string, text: string) {
    let copyListExp = [...this.experience];

    console.log(text);
    //console.log(myForm);
    let objIndex: number;
    //Encontar la experiencia usando id
    objIndex = copyListExp.findIndex((obj => obj.id == id));
    let newExp = { id: id, fecha: fecha, url: url, urlTitle: urlTitle, img: img, text: text }
    copyListExp[objIndex] = newExp;
    console.log(copyListExp);
    console.log(copyListExp[objIndex]);

    this.experience = copyListExp;
  }

  deleteExperience(currentId: number) {
    const indexOfObject = this.experience.findIndex(object => {
      return object.id === currentId;
    });

    this.experience.splice(indexOfObject, 1);
  }

  updateExperienceToBd(myform: Form) { }
}
