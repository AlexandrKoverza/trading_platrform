import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialComponent } from './dial.component';



@NgModule({
  declarations: [
    DialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DialComponent]
})
export class DialModule { }
