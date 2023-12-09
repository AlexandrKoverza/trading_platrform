import { SharedModule } from '../landing/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { AboutModule } from './components/about/about.module';
import { IntroModule } from './components/intro/intro.module';
import { TradeModule } from './components/trade/trade.module';
import { WhyModule } from './components/why/why.module';
import { StatisticModule } from './components/statistic/statistic.module';
import { PackagesModule } from './components/packages/packages.module';
import { SupportModule } from './components/support/support.module';
import { ForgotModule } from './components/forgot/forgot.module';
import { BeModule } from './components/be/be.module';
import { RegistrationModule } from './shared/components/registration/registration.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    IntroModule,
    AboutModule,
    TradeModule,
    WhyModule,
    StatisticModule,
    PackagesModule,
    SupportModule,
    BeModule,
    ForgotModule,
    RegistrationModule
  ],
  exports: [LandingComponent]
})
export class LandingModule {}
