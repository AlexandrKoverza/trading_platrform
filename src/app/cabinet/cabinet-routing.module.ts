import { CabinetComponent } from './cabinet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './components/rating/rating.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DealComponent } from './components/deal/deal.component';
import { DialComponent } from './components/dial/dial.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: 'rating', component: RatingComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'deal', component: DealComponent },
      { path: 'dial', component: DialComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetRoutingModule {}
