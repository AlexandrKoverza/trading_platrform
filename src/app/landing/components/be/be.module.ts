import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeComponent } from './be.component';
import { LoginModule } from '../../shared/components/login/login.module';

@NgModule({
  declarations: [BeComponent],
  imports: [CommonModule, LoginModule],
  exports: [BeComponent]
})
export class BeModule {}
