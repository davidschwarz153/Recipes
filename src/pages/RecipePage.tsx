import { useParams } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../context/MainProvider";
import { Category, Ingredient, Recipe } from "../interfaces/Interface";

export default function RecipePage() {
  const { id } = useParams();
  const { cats } = useContext(mainContext) as any;

  const recipe: Recipe = cats
    .flatMap((cat: Category) => cat.recipes)
    .find((r: Recipe) => r.id.toString() === id);

  if (!recipe) {
    return <p>Rezept nicht gefunden!</p>;
  }

  return (
      <>
        <section className="mb-8 h-60 w-screen bg-cover bg-center flex flex-col justify-center items-center text-2xl font-bold relative" 
            style={{ backgroundImage: `url(${recipe.img})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <article className="relative z-10 text-center">
            <p>{recipe.name}</p>
          </article>
        </section>

        <section className="mx-10">
            <article className="mb-6">
                <p className="font-bold">Zutaten:</p>
                    <ul>
                        {recipe.ingredients.map((i:Ingredient)=>{
                            return(
                                <li>{i.quantity} {i.unit}   {i.name}    {i.additional_info}</li>
                            )
                        })}
                    </ul>
            </article>
            <article className="mb-6">
                <p className="font-bold">Zubereitung:</p>
                <ol className="flex flex-col">
                    {recipe.instructions}
                </ol>
            </article>

        </section>
        
      </>
  );
}
