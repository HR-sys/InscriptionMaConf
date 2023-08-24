import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from 'src/app/components/inscription/inscription.component';
export const routes: Routes = [
  {
    path: '',
    component: InscriptionComponent,
  },
  {
    path : 'logout',
    component : InscriptionComponent,
    data : { title : "Profil" }
  },
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
