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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
