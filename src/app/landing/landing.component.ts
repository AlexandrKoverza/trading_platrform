import { Component } from '@angular/core';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(public popupService: PopupService) {}

}
