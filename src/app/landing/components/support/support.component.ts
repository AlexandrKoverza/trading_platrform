import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  support: boolean = true;
  contact: boolean = false;

  ngOnInit(): void {}

  supportButton() {
    this.support = true;
    this.contact = false;
  }

  contactButton() {
    this.support = false;
    this.contact = true;
  }
}
