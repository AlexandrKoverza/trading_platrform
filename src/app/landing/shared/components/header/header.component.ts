import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('target') target!: ElementRef;
  nav: boolean = true;

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.nav = false;
    }
  }

  burger() {
    this.nav = !this.nav;
  }

  about(): void {
    this.target.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
