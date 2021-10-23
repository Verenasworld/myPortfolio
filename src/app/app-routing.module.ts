import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./container/home/home.component";
import {AboutComponent} from "./container/about/about.component";
import {ContainerComponent} from "./container/container.component";

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
