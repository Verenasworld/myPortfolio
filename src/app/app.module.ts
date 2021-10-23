import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { ServiceComponent } from './container/service/service.component';
import { ContactComponent } from './container/contact/contact.component';
import { EducationComponent } from './container/education/education.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    EducationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
