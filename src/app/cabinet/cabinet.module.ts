import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { SharedModule } from './shared/shared.module';
import { DealModule } from './components/deal/deal.module';
import { DialModule } from './components/dial/dial.module';
import { RatingModule } from './components/rating/rating.module';
import { SettingsModule } from './components/settings/settings.module';
import { WalletModule } from './components/wallet/wallet.module';


@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    SharedModule,
    DealModule,
    DialModule,
    RatingModule,
    SettingsModule,
    WalletModule
  ],
  exports: [CabinetComponent]
})
export class CabinetModule { }
