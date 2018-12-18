import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VeterianariaComponent } from './veterianaria/veterianaria.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

const routes : Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full"},
  { path: "inicio", component: VeterianariaComponent},
  { path: "detalle", component : DetalleComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    VeterianariaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
