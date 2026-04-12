type Props = {
  recipe: {
    id: string;
    imgUrl: string;
    title: string;
    chef: string;
    sourceUrl: string;
    videoUrl: string;
  };
};

import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }: Props) {
  const navigate = useNavigate();
  const imageSrc = recipe.imgUrl?.trim()
    ? import.meta.env.BASE_URL +  recipe.imgUrl
    : import.meta.env.BASE_URL + "images/sample.png";
  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/detail/${recipe.id}`)}
    >
      <div className="card-img">
        <img 
          src={imageSrc} 
          alt={recipe.title}
          onError={() => setImgSrc("/images/sample.png")}
        />
        <h3>{recipe.title}</h3>
        <div className="goto">
          {recipe.sourceUrl && (
              <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
              >
                  <img
                      src={import.meta.env.BASE_URL + "images/logo/instagram.webp"}
                      alt="instagram"
                  />
              </a>
          )}
          {recipe.videoUrl && (
              <a
                  href={recipe.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
              >
                  <img
                      src={import.meta.env.BASE_URL + "images/logo/youtube-s.png"}
                      alt="youtube"
                  />
              </a>
          )}
        </div>
      </div>

      <div className="card-body">
        <p>{recipe.chef}</p>
      </div>
    </div>
  );
}