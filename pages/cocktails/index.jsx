import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Cocktails = () => {
  const router = useRouter();
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
      );
      const cocktailsData = await cocktailsResponse.json();
      setCocktails(cocktailsData.drinks);
    })();
  }, []);
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/cocktails/${id}`);
  };
  return (
    <div>
      <h1>Tous les cocktails</h1>
      {cocktails.length === 0 && <p>Loading...</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {cocktails.map((cocktail) => (
          <article
            onClick={(e) => handleClick(e, cocktail.idDrink)}
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
    </div>
  );
};

export default Cocktails;
