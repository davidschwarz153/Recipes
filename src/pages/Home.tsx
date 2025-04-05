import FavRecipes from "../components/favRecipes/FavRecipes";

export default function Home() {
    return (
      <>
        <section className="h-60 w-screen bg-cover bg-center flex flex-col justify-center items-center text-2xl font-bold relative" style={{ backgroundImage: "url('/hero.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
  
          <div className="relative z-10 text-center">
            <p>Lassen Sie sich inspirieren, kochen Sie mit</p>
            <p>Leidenschaft und erleben Sie unvergessliche</p>
            <p>Momente bei Tisch.</p>
          </div>
        </section>
        <FavRecipes/>
      </>
    );
  }
  