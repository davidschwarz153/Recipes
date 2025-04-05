import { useContext } from "react";
import { mainContext } from "../context/MainProvider";
import { Link } from "react-router-dom";
import { Category, Recipe } from "../interfaces/Interface";

export default function Recipes() {
    const { cats } = useContext(mainContext) as any;
  return (
    <>
          <section className="flex flex-col justify-center items-center gap-10 mx-12 mt-10 w-screen mb-20">
        {cats.map((cat: Category) => {
          return cat.recipes.map((r: Recipe) => {
            return (
            <Link to={`/recipe/${r.id}`}>
              <article key={r.id} className="bg-gray-700 mx-20 w-200 h-70 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 transform cursor-pointer">
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
  )
}
