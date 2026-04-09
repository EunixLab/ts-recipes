type Props = {
  recipe: {
    id: string;
    imgUrl: string;
    title: string;
    chef: string;
  };
};

import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }: Props) {
  const imageSrc = recipe.imgUrl?.trim()
    ? import.meta.env.BASE_URL + recipe.imgUrl
    : import.meta.env.BASE_URL + "images/sample.png";
  return (
    <Link to={`/detail/${recipe.id}`} className="recipe-card">
      <div className="card-img">
        <img src={imageSrc} alt={recipe.title} />

        <h3>{recipe.title}</h3>
      </div>

      <div className="card-body">
        <p>{recipe.chef}</p>
      </div>
    </Link>
  );
}