import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-screen h-6 bg-amber-400"></div>
      <nav className="flex items-center justify-around my-6 mx-30 ">
          <section className="mr-10">
            <Link to="/" className="cursor-pointer flex items-center gap-4">
              <img className="w-5" src="/cup.png" alt="" />
              <h1>Die Rezeptwelt</h1>
            </Link>
          </section>
          <section className="flex gap-10">
            <Link to="/" className="cursor-pointer">Home</Link>
            <Link to="/recipe" className="cursor-pointer">Rezepte</Link>
            <Link to="" className="cursor-pointer">Über uns</Link>
          </section>
          <section>
            <Link to="" className="cursor-pointer">Login</Link>
          </section>
      </nav>
    </>
  )
}
