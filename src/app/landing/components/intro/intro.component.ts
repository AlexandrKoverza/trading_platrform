import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  introModal: boolean = false;
  login: boolean = true;
  forgot: boolean = false;

  constructor(public popupService: PopupService) {}

  ngOnInit(): void {}

  registrationOpenButton() {
    this.popupService.open();
  }

  logIn() {
    this.introModal = true;
  }

  loginButton() {
    this.introModal = false;
  }

  forgotButton() {
    this.forgot = !this.forgot;
    this.login = false;
  }

  sendEmailButton() {
    this.login = true;
    this.forgot = false;
    this.introModal = false;
  }
}
