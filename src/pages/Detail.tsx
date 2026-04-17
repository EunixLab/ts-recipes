import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { useState } from "react";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const saved = JSON.parse(localStorage.getItem("recipes") || "[]");
    const recipe = saved.find((r: any) => r.id === id);
    if (!recipe) return <div className="nodata">레시피 없음</div>;
    
    const imageSrc = recipe.imgUrl?.trim()
        ? import.meta.env.BASE_URL + recipe.imgUrl
        : import.meta.env.BASE_URL + "images/sample.png";
    const [imgSrc, setImgSrc] = useState(imageSrc);

    return (
        <div className="recipe-detail">
            <div className="detail__hero">
                <img
                    src={imageSrc} 
                    alt={recipe.title}
                    onError={(e) => {
                        e.currentTarget.onerror = null; // 무한루프 방지
                        e.currentTarget.src = import.meta.env.BASE_URL + "images/sample.png";
                    }}
                />
                <div className="detail__overlay">
                    <h1>{recipe.title}</h1>
                    <p>{recipe.chef}</p>
                    <div className="goto">
                        {recipe.sourceUrl && (
                            <a
                                href={recipe.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
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
                            >
                                <img
                                    src={import.meta.env.BASE_URL + "images/logo/youtube-s.png"}
                                    alt="youtube"
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            
            <section className="detail__section">
                <h2>재료</h2>
                <ul className="ingredients">
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="detail__section">
                <h2>양념</h2>
                <ul className="seasonings">
                    {recipe.seasonings?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="detail__section">
                <h2>조리 방법</h2>
                {recipe.steps.map((step, idx) => (
                    <div key={idx} className="step">
                        <span>{idx + 1}</span>
                        <p>{step}</p>
                    </div>
                ))}

            </section>

            <button type="button" className="detail__back" onClick={() => navigate(-1)}>← 뒤로가기</button>

        </div>

    );
}