import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { useContext } from "react";
import { mainContext } from "../context/MainProvider";

export default function EigenesRezept() {
  
  const { refreshData } = useContext(mainContext) as any;
  
  const [recipe, setRecipe] = useState({
    name: "",
    category_id: "",
    instructions:""
  });

  const [imgUrl, setImgUrl] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [instruction,setInstruction] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name');
      
      if (error) {
        console.error("fehler Kategorie:", error);
        return;
      }
      
      setCategories(data || []);
      if (data && data.length > 0) {
        setRecipe(prev => ({...prev,category_id: data[0].id}));
      }
    };
    
    fetchCategories();
  }, []);

  const recipeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRecipe(prev => ({...prev,[e.target.name]: e.target.value}));
  };

  const instructionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInstruction(e.target.value);
  };

  const imgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value);
  };



  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    
    
    try {
      const { error: recipeError } = await supabase
        .from('recipes')
        .insert([{
          name: recipe.name,
          category_id: recipe.category_id,
          description: "",
          instructions: "",
          servings: 1,
          img: imgUrl
        }])
        .select()
        .single();

      if (recipeError) {
        console.error("Fehler beim Speichern des Rezepts:", recipeError);
        setMessage("Fehler beim Speichern des Rezepts: " + recipeError.message);
        return;
      }

      setMessage("Rezept erfolgreich gespeichert!");
      
      await refreshData();
      

    } catch (error) {
      console.error('fehelr rezept speichern:', error);
      setMessage("Ein unerwarteter Fehler ist aufgetreten.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Eigenes Rezept hinzufügen</h1>
      
      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes("erfolgreich") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={submit} className="space-y-6">
        <div>
          <label className="block mb-2">Rezeptname:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={recipeChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Kategorie:</label>
          <select
            name="category_id"
            value={recipe.category_id}
            onChange={recipeChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Bitte wählen</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">Bild-URL:</label>
          <input
            type="text"
            value={imgUrl}
            onChange={imgChange}
            className="w-full p-2 border rounded"

            required
          />
        </div>


        <div>
          <label className="block mb-2">Zubereitung</label>
          <input
            type="text"
            value={instruction}
            onChange={instructionChange}
            className="w-full h-30 p-2 border rounded "

            required
          />
        </div>



        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600"
        >
          Rezept speichern
        </button>
      </form>
    </div>
  );
}
