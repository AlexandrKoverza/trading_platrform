import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(public popupService: PopupService) {}

  ngOnInit(): void {}
  toRegistration() {
    this.popupService.open();
  }
}
