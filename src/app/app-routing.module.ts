import { Error404Component } from './Error404/Error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './aprendizado/lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listas',
    pathMatch: 'full',
  },
  {
    path: 'listas',
    component: ListaComponent,
  },
  {
    path: '**', component: Error404Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
