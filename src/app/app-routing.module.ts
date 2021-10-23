import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./container/home/home.component";
import {AboutComponent} from "./container/about/about.component";
import {ServiceComponent} from "./container/service/service.component";
import {EducationComponent} from "./container/education/education.component";
import {ContactComponent} from "./container/contact/contact.component";

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'service',component:ServiceComponent},
  {path: 'education',component:EducationComponent},
  {path: 'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
