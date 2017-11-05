import { ShoppingListRouteModule } from './shopping-list.routing.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app.routing.module';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ShoppingListRouteModule
    ],
    exports: [
        FormsModule
    ]
})

export class ShoppingListModule {}
