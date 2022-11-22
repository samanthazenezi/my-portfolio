import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TitleComponent } from './componentes/title/title.component';
import { SobremimComponent } from './componentes/sobremim/sobremim.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TitleComponent,
    SobremimComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
