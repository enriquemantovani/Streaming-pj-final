export default function Home() {


  return(

    
    <main className="bg-blue-600">

      {/*Hero*/}
      <section className="text-center px-4 py-16 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Assista todos os seus favoritos com a <span className="text-cyan-400">Byron.tv</span>!
        </h2>
        <p className="text-blue-300 max-w-xl mx-auto mt-2 text-lg">Explore séries, filmes e muito mais, tudo em um só lugar.</p>
      </section>

      {/*Cards*/}
      <section className="flex flex-col md:flex-row justify-center gap-8 px-6 py-12">
        <div className="bg-blue-800 hover:bg-blue-700 p-6 rounded-lg w-full md:w-1/3 transition shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Séries</h3>
          <p className="text-blue-200 mb-4">Veja lançamentos, tops da semana e séries em destaque.</p>
          <ul className="text-blue-100 text-sm list-disc list-inside space-y-1">
            <li>Stranger Things</li>
            <li>Fate/Zero</li>
            <li>Round 6</li>
          </ul>
        </div>
        <div className="bg-blue-800 hover:bg-blue-700 p-6 rounded-lg w-full md:w-1/3 transition shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-300">Gêneros</h3>
          <p className="text-blue-200 mb-4">Explore por categorias como Ação, Romance, Comédia e mais.</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-cyan-400 text-blue-900 px-3 py-1 rounded-full font-semibold">Ação</span>
            <span className="bg-cyan-400 text-blue-900 px-3 py-1 rounded-full font-semibold">Romance</span>
            <span className="bg-cyan-400 text-blue-900 px-3 py-1 rounded-full font-semibold">Comédia</span>
            <span className="bg-cyan-400 text-blue-900 px-3 py-1 rounded-full font-semibold">Suspense</span>
          </div>
        </div>
      </section>

      {/*Destaques*/};
      <section className="px-6 pb-16">
        <h3 className="text-3xl font-bold mb-6 text-center text-cyan-300">Destaques para você</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="rounded-xl bg-blue-800 hover:bg-blue-700 transition shadow-lg overflow-hidden">
            <div className="h-32 bg-blue-700 flex items-center justify-center font-bold text-cyan-300 text-sm">The Monitor</div>
            <p className="text-xs text-blue-200 p-3">Veja lançamentos, tops de semana e sucessos recentes.</p>
          </div>
          <div className="rounded-xl bg-blue-800 hover:bg-blue-700 transition shadow-lg overflow-hidden">
            <div className="h-32 bg-blue-700 flex items-center justify-center font-bold text-cyan-300 text-sm">Dark City</div>
            <p className="text-xs text-blue-200 p-3">Uma cidade onde tudo pode acontecer. Suspense e drama.</p>
          </div>
          <div className="rounded-xl bg-blue-800 hover:bg-blue-700 transition shadow-lg overflow-hidden">
            <div className="h-32 bg-blue-700 flex items-center justify-center font-bold text-cyan-300 text-sm">Alien Conflict</div>
            <p className="text-xs text-blue-200 p-3">Conflitos galácticos e decisões de vida ou morte.</p>
          </div>
          <div className="rounded-xl bg-blue-800 hover:bg-blue-700 transition shadow-lg overflow-hidden">
            <div className="h-32 bg-blue-700 flex items-center justify-center font-bold text-cyan-300 text-sm">Forlorn</div>
            <p className="text-xs text-blue-200 p-3">Uma jornada solitária no coração da floresta escura.</p>
          </div>
          <div className="rounded-xl bg-blue-800 hover:bg-blue-700 transition shadow-lg overflow-hidden">
            <div className="h-32 bg-blue-700 flex items-center justify-center font-bold text-cyan-300 text-sm">The Long Way</div>
            <p className="text-xs text-blue-200 p-3">Uma viagem intensa cheia de reviravoltas emocionantes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
