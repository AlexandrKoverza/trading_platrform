import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
      
  }

  registrationCloseButton() {
    this.popupService.close()
  }
}
