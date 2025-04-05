export default function Footer() {
    return (
      <>
        <footer className="bg-amber-400 h-30 text-black font-bold flex justify-around items-center ">
          <section className="flex items-center gap-4">
            <img src="/cup.png" alt="" />
            <p className="text-2xl">Die Rezeptwelt</p>
          </section>
          <section>
            <p className="mb-4">Social Media</p>
            <article className="flex gap-2">
              <img className="w-6 cursor-pointer" src="/youtube.png" alt="" />
              <img className="w-6 cursor-pointer" src="/twitter.png" alt="" />
              <img className="w-6 cursor-pointer" src="/browser.png" alt="" />
              <img className="w-6 cursor-pointer" src="/pinterest.png" alt="" />
            </article>
          </section>
        </footer>
      </>
  )
}
