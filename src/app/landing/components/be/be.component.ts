import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-be',
  templateUrl: './be.component.html',
  styleUrls: ['./be.component.scss']
})
export class BeComponent implements OnInit {
  constructor(public popupService: PopupService) {}

  ngOnInit(): void {}

  startTrading() {
    this.popupService.open();
  }
}
