import { AuthRoutingModule } from './auth.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './../app.routing.module';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        AuthRoutingModule
    ]
})

export class AuthModule {

}