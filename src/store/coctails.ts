import { ICocktail } from "../models/coctail.model";
import { makeAutoObservable } from "mobx";

export class CocktailsStore {
  drinks: ICocktail[] = [];
  randomCocktail: ICocktail | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setRandomCocktail(cocktail: ICocktail) {
    this.randomCocktail = cocktail
  }
}
