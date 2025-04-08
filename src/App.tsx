import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import RecipePage from './pages/RecipePage';
import Recipes from './pages/Recipes';
import EigenesRezept from './pages/EigenesRezept';


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="/recipe" element={<Recipes/>}/>
        <Route path="/eigenes-rezept" element={<EigenesRezept/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


