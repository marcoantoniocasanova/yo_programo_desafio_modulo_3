import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { SharedService } from 'src/app/service/service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SharedService]
})
export class NavBarComponent {
  title = 'navbar';
  displayElement = true;
  user = '';
  pass = '';

  constructor(private sharedService: SharedService) { }


  onSubmit(data: any) {
    console.log(data.password);
    console.log(data.username);
    if (data.password == "123" && data.username == "macd") {
      this.sharedService.setlogin(true);
    }
    this.displayElement = true;

  }


  updateEditMode() {
    this.displayElement = !this.displayElement;
  }
}
