import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataStorageService {

    dbLink = 'https://recipe-abd2b.firebaseio.com/data.json';

    constructor(private http: Http, 
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();

        return this.http.put(this.dbLink + '?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get(this.dbLink).map(
            (response: Response) => {
                const recipes = response.json();
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
