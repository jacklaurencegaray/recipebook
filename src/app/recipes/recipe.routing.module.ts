import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from './../auth/auth.guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuard] },
        { path: ':id/edit', component: RecipeEditComponent }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class RecipeRoutingModule {

}