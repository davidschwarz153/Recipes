import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { Category, Recipe } from "../../interfaces/Interface";
import { Link } from "react-router-dom";

export default function FavRecipes() {
  const { cats } = useContext(mainContext) as any;

  return (
    <>
      <section className="mt-10 flex justify-center">
        <p className="text-2xl font-bold">Die beliebtesten Rezepte</p>
      </section>
      <section className="flex justify-center items-center gap-10 mx-12 mt-10">
        {cats.slice(3).map((cat: Category) => {
          return cat.recipes.map((r: Recipe) => {
            return (
            <Link to={`/recipe/${r.id}`} className="flex justify-center">
              <article key={r.id} className="bg-gray-700 w-md h-70 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 transform cursor-pointer">
                <img
                  className="h-1/2 w-full object-cover rounded-t-3xl"
                  src={r.img}
                  alt={r.name}
                />
                <div className="p-4">
                    <p className="text-lg font-bold">{r.name}</p> 
                    <p className="text-sm mb-4 overflow-hidden">{r.description}</p>
                    <button className="bg-amber-500 rounded-2xl px-4 p-1 text-sm"> Zum Rezept</button>
                </div>
              </article>
            </Link>
            );
          });
        })}
      </section>
    </>
  );
}
