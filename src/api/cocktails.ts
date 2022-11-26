import axios from "axios";
import { ICocktail } from "../models/coctail.model";
import { baseURL } from "./api-urls";

export default class CocktailsAPI {
  private url = baseURL;
  private urlFileExtension = ".php";

  getRecipeById(id: number) {
    return axios.get(this.url + id);
  }

  public async getRandomRecipe(): Promise<ICocktail | null> {
   let cocktail = null;

   await axios.get(this.url + "random" + this.urlFileExtension).then(resp => {
      let data = resp.data.drinks[0];
      cocktail = {id: data.idDrink, name: data.strDrink}
    }) 
   return cocktail
  }
}
