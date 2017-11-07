import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core/core.routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    CoreRoutingModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
