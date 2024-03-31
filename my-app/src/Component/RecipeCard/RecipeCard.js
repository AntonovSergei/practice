import StaticRatingStars from "../RatingStars/StaticRaitingStars";

function RecipeCard({recipeName, ingredients, difficulty}) {
    return(
        <div className="card">
            <h3>{recipeName}</h3>
            <p>Сложность: <StaticRatingStars total={5} selectedValue={difficulty} /></p>
            <div className="recipe">
                <ul>
                    {ingredients.map((field) => <li key={field.name}>{field.name} {field.quantity}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default RecipeCard;