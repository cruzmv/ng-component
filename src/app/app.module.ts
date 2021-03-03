import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgComponentsCruzModule } from 'ng-components-cruz';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgComponentsCruzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
