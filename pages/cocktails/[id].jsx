import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Cocktail = ({ cocktailData }) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/cocktails");
  };

  return (
    <div>
      <Button
        onClick={handleNavigate}
        variant="outlined"
        href="#outlined-buttons"
      >
        Retour
      </Button>
      <h1>{cocktailData.strDrink}</h1>
      <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
      <p>{cocktailData.strCate}</p>
      <h2>Ingredients</h2>
      <ul>
        {cocktailData.strIngredient1 && <li>{cocktailData.strIngredient1}</li>}
        {cocktailData.strIngredient2 && <li>{cocktailData.strIngredient2}</li>}
        {cocktailData.strIngredient3 && <li>{cocktailData.strIngredient3}</li>}
        {cocktailData.strIngredient4 && <li>{cocktailData.strIngredient4}</li>}
        {cocktailData.strIngredient5 && <li>{cocktailData.strIngredient5}</li>}
        {cocktailData.strIngredient6 && <li>{cocktailData.strIngredient6}</li>}
        {cocktailData.strIngredient7 && <li>{cocktailData.strIngredient7}</li>}
        {cocktailData.strIngredient8 && <li>{cocktailData.strIngredient8}</li>}
      </ul>
    </div>
  );
};

export default Cocktail;

export async function getStaticPaths() {
  const cocktailsResponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );
  const cocktailsData = await cocktailsResponse.json();
  const paths = cocktailsData.drinks.map((cocktail) => ({
    params: { id: cocktail.idDrink },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const cocktailResponse = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const cocktailData = await cocktailResponse.json();
  return {
    props: { cocktailData: cocktailData.drinks[0] },
  };
}
