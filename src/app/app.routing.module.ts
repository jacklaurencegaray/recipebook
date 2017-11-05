import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule' },
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
