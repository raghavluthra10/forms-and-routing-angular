import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { ServiceComponent } from './pages/service/service.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'service', component: ServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };