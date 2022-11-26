import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import { useRootStore } from "./hooks/useStore";
import RecipesAPI from "./api/cocktails";

const App = observer(() => {
  const { cocktails } = useRootStore();
  const recipes = new RecipesAPI();

  const setRandomCocktail = async () => {
    let randomCocktail = await recipes.getRandomRecipe();
    if(randomCocktail) cocktails.setRandomCocktail(randomCocktail);
  };
  return (
    <>
      <div className="App">
        <h2>Random Drink</h2>
        {cocktails.randomCocktail !== null && (
          <span>{cocktails.randomCocktail.name}</span>
        )}
      </div>

      <button onClick={setRandomCocktail}>get random</button>
    </>
  );
});

export default App;
