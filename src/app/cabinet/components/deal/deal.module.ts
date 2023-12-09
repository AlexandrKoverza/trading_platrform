import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './deal.component';



@NgModule({
  declarations: [
    DealComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DealComponent]
})
export class DealModule { }
