import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Ratatouille', 'Good stuff', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', 
        [  
            new Ingredient('Carrot', 3),
            new Ingredient('Pepper', 6),
            new Ingredient('Cucumber', 3)
        ]),
        new Recipe('Pizza', 'Better stuff', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', 
        [  
            new Ingredient('Cheese', 6),
            new Ingredient('Pepper', 3),
            new Ingredient('Onion', 2)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}