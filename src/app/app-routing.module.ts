import { RatingModule } from './cabinet/components/rating/rating.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('../app/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('../app/cabinet/cabinet.module').then(
        (m) => m.CabinetModule
      ),
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
