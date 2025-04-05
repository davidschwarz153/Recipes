
export interface Ingredient {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    additional_info: string | null;
    recipe_id: string;
  }
  
  export interface Recipe {
    id: string;
    name: string;
    description: string;
    instructions: string;
    servings: number;
    ingredients: Ingredient[];
    img: string;
    category_id: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    img: string;
    recipes: Recipe[];
  }
  
  export interface Data {
    id: string;
    img: string;
    name: string;
    recipes: Recipe[];
  }
  