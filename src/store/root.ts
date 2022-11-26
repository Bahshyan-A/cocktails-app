import { makeAutoObservable } from "mobx";
import { CocktailsStore } from "./coctails";

export class RootStore {
    cocktails: CocktailsStore

    constructor() {
        makeAutoObservable(this)
        this.cocktails = new CocktailsStore();
    }
}
