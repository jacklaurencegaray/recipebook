import { CoreRoutingModule } from './core.routing.module';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app.routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        ErrorComponent
    ],
    imports: [
        SharedModule,
        CoreRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService
    ]
})

export class CoreModule {

}
