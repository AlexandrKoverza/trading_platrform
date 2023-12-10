import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(
    public popupService: PopupService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {}

  registrationOpenButton() {
    this.popupService.open();
  }

  loginButton() {
    this.loginService.open();
  }
}
