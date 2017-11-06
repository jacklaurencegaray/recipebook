import { NgModule } from '@angular/core';
import { ErrorComponent } from './../core/error/error.component';
import { Router, RouterModule, Routes } from '@angular/router';

const coreRoutes: Routes = [
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(coreRoutes) ],
    exports: [ RouterModule ]
})

export class CoreRoutingModule {

}
