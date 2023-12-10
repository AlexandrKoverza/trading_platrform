import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: boolean = true;
  forgot: boolean = false;

  constructor(
    public loginService: LoginService,
    public popupService: PopupService
  ) {}

  registrationOpenButton() {
    this.popupService.open();
  }

  loginButton() {}

  forgotButton() {
    this.forgot = true;
    // this.login = false;
  }

  sendEmailButton() {}
}
