import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../../recipes/recipe.service';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, 
              private recipeService: RecipeService,
              public authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }, (error: Response) => {
        console.log(error);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
