import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [cocktails, setCocktails] = useState([]);
  const [randomCocktails, setRandomCocktails] = useState({});

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
      );
      const cocktailsData = await cocktailsResponse.json();

      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const cocktailRandomData = await cocktailsResponse.json();
      setRandomCocktails(cocktailRandomData.drinks[0]);
    })();
  }, []);

  const handleNavigate = () => {
    router.push("/cocktails");
  };

  return (
    <main>
      <section>
        {cocktails.length === 0 && <p>Loading...</p>}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <article
            onClick={() => router.push(`/cocktails/${randomCocktails.idDrink}`)}
          >
            <h1>Random cocktail</h1>
            <h2>{randomCocktails.strDrink}</h2>
            <img
              style={{
                width: "200px",
              }}
              src={randomCocktails.strDrinkThumb}
              alt={randomCocktails.strDrink}
            />
          </article>
          {cocktails.slice(0, 6).map((cocktail) => (
            <article
              key={cocktail.idDrink}
              style={{
                width: "300px",
                height: "300px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/cocktails/${cocktail.idDrink}`)}
            >
              <h2>{cocktail.strDrink}</h2>
              <img
                style={{
                  width: "200px",
                }}
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
            </article>
          ))}
        </div>
        <Button
          onClick={handleNavigate}
          variant="outlined"
          href="#outlined-buttons"
        >
          Voir plus
        </Button>{" "}
      </section>
    </main>
  );
};

export default Home;
