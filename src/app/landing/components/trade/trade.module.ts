import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeComponent } from './trade.component';



@NgModule({
  declarations: [
    TradeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TradeComponent]
})
export class TradeModule { }
