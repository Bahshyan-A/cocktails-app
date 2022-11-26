import React, { useEffect, useMemo } from "react";
import "./App.css";
import { observer } from "mobx-react";
import { useRootStore } from "./hooks/useStore";
import RecipesAPI from "./api/cocktails";
import { CocktailCard } from "./components/cocktail-card/CocktailCard";
import { Button } from "antd";

const App = observer(() => {
  const { cocktails } = useRootStore();
  const recipes = new RecipesAPI();

  const setRandomCocktail = async () => {
    let randomCocktail = await recipes.getRandomRecipe();
    if (randomCocktail) cocktails.setRandomCocktail(randomCocktail);
  };

  useEffect(() => {
    setRandomCocktail();
  }, []);

  let randomCocktail = useMemo(
    () => cocktails.randomCocktail,
    [cocktails.randomCocktail]
  );

  return (
    <div className="App">
      <h1>Random Drink</h1>
      {randomCocktail !== null && (
        <CocktailCard
          name={randomCocktail.name}
          id={randomCocktail.id}
          category={randomCocktail.category}
          imgURL={randomCocktail.imgURL}
          size={480}
        />
      )}
      <Button
        size="large"
        onClick={setRandomCocktail}
        type="primary"
      >
        Random Cocktail
      </Button>
    </div>
  );
});

export default App;
