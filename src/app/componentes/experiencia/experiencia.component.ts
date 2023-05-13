import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  addExperience() {
    this.experience.push({ id: this.experience[this.experience.length - 1].id + 1, fecha: "", url: "", urlTitle: "", img: "", text: "" });
  }

  updateExperience(myForm: any) {
    /*     let copyListExp = [...this.experience];
    
        console.log(text);
        //console.log(myForm);
        let objIndex: number;
        //Encontar la experiencia usando id  
        objIndex = copyListExp.findIndex((obj => obj.id == id));
        let newExp = { id: id, fecha: fecha, url: url, urlTitle: urlTitle, img: img, text: text }
        copyListExp[objIndex] = newExp;
        console.log(copyListExp);
        console.log(copyListExp[objIndex]);
    
        this.experience = copyListExp; */
    console.log(myForm);
  }

  deleteExperience(currentId: number) {
    const indexOfObject = this.experience.findIndex(object => {
      return object.id === currentId;
    });

    this.experience.splice(indexOfObject, 1);
  }

  updateExperienceToBd(myform: any) { }


}