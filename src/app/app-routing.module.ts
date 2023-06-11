import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', redirectTo: '/imprint', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
