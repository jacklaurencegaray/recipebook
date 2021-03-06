import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const shoppingListRoute: Routes = [
    { path: '', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingListRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class ShoppingListRouteModule {
    
}