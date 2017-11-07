import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataStorageService implements OnInit {

    dbLink = 'https://recipe-abd2b.firebaseio.com/data.json';

    constructor(private http: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService) {}

    ngOnInit() {
        this.dbLink += this.authService.getToken();
    }

    storeRecipes() {
        return this.http.put(
                            this.dbLink, 
                            this.recipeService.getRecipes()
        );
    }

    getRecipes() {
        this.http.get<Recipe[]>(this.dbLink).map(
            (recipes) => {
                for (const recipe of recipes) {
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
