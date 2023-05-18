import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { SharedVarService } from 'src/app/service/service';

enum LoginStatus {
  normal = 0,
  loginBar = 1,
  logOut = 2,
}


@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  title = 'navbar';
  loginBarStatus: number = LoginStatus.normal;
  displayElement = true;
  user = '';
  pass = '';


  constructor(private sharedService: SharedVarService) { }

  onSubmit(data: any) {
    if (data.password == "123" && data.username == "macd") {
      this.sharedService.setValue(true);
      this.loginBarStatus = LoginStatus.logOut;
    } else {
      this.displayElement = true;
      this.loginBarStatus = LoginStatus.loginBar;
    }
  }

  updateEditMode() {
    this.displayElement = !this.displayElement;
  }

  displayLoginBar() {
    this.loginBarStatus = LoginStatus.loginBar;
  }
}
