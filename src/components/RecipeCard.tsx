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
  return (
    <Link to={`/detail/${recipe.id}`} className="recipe-card">
      <div className="card-img">
        <img src={import.meta.env.BASE_URL + recipe.imgUrl || "/images/default.png"} alt={recipe.title} />
      </div>

      <div className="card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.chef}</p>
      </div>
    </Link>
  );
}