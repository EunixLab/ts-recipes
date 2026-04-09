import { useParams } from "react-router-dom";
import { recipes } from "@/data/recipes";

export default function Detail() {
    const { id } = useParams();

    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return <div>없음</div>;
    const imageSrc = recipe.imgUrl?.trim()
        ? import.meta.env.BASE_URL + recipe.imgUrl
        : import.meta.env.BASE_URL + "images/sample.png";

    return (
        <div className="recipe-detail">
            <div className="imgBox">
                <h1>{recipe.title}</h1>
                <img src={imageSrc} alt={recipe.title} />
                <p>{recipe.chef}</p>
            </div>

            <div className="detail__content">
                <section className="detail__ingredients">
                    <h3>재료</h3>
                    <ul className="ingredients">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                </section>

                <section className="detail__seasonings">
                    <h3>양념</h3>
                    <ul className="seasonings">
                        {recipe.seasonings?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="detail__steps">
                    <h3>조리 방법</h3>
                    <ol className="steps">
                        {recipe.steps.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </section>
            </div>

            <button className="detail__back">← 뒤로가기</button>

        </div>

    );
}