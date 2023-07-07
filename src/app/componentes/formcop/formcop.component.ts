import { Component, NgZone, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ExpTyp } from '../../modelos/experiencia.model'
import { SharedVarService } from 'src/app/service/service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'experiencia-component',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
  experience: ExpTyp[] = [];
  showEditButton = false;
  displayElement = true;
  isLoading = true;
  constructor(public sharedService: SharedVarService, private ngZone: NgZone, private http: HttpClient) { }
  ngOnInit() {


    this.sharedService.getValue().subscribe((value) => {
      this.showEditButton = value;
    });


    this.http
      .get<any>('https://express-js-service-api-cv.onrender.com/experiencias')
      .subscribe(data => {
        console.log(data.data);
        this.experience = data.data as ExpTyp[];
        this.isLoading = false;
      });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  addExperience(idx) {
    var exp = { id: this.experience[this.experience.length - 1].id + 1, fecha: "", img: "", titulo: "" };
    this.experience.push(exp);

    const body = { experiencia: exp };

    this.http
      .post<any>('https://express-js-service-api-cv.onrender.com/experiencias', body)
      .subscribe(data => {
        console.log(data);
      });


    document.getElementById(idx);


  }

  updateExperience(id: number, fecha: string, img: string, text: string) {
    let copyListExp = [...this.experience];

    console.log(text);
    //console.log(myForm);
    let objIndex: number;
    //Encontar la experiencia usando id
    objIndex = copyListExp.findIndex((obj => obj.id == id));
    let newExp = { id: id, fecha: fecha, img: img, titulo: text }
    copyListExp[objIndex] = newExp;
    this.experience = copyListExp;
  }

  updateCurrentExperience(exp: any) {
    console.log(exp);
    const body = { experiencia: exp };
    this.http
      .put<any>('https://express-js-service-api-cv.onrender.com/experiencias/${exp.id}', body)
      .subscribe(data => {
        console.log(data);
      });

    this.updateExperience(exp.id, exp.fecha, exp.img, exp.titulo)
  }

  deleteExperience(currentId: number) {
    const indexOfObject = this.experience.findIndex(object => {
      return object.id === currentId;
    });

    this.experience.splice(indexOfObject, 1);
  }

  updateExperienceToBd(myform: Form) { }
}
