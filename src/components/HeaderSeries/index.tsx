import Link from "next/link"

export default function HeaderSeries(){

    return(

        <header className="bg-blue-900/90 backdrop-blur px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
            <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">Byron.tv</h1>
            <nav className="hidden md:flex gap-6 text-base font-medium">
                <Link href="/" className="hover:text-cyan-300 transition">Início</Link>
                <Link href="/series" className="hover:text-cyan-300 transition">Séries</Link>
                <Link href="/" className="hover:text-cyan-300 transition">Filmes</Link>
                <Link href="/" className="hover:text-cyan-300 transition">Minha Lista</Link>
            </nav>
            <div className="flex items-center gap-4">
                
                <button className="text-xl hover:text-cyan-300 transition">🔍</button>
                <button className="text-xl hover:text-cyan-300 transition">🔔</button>
            

                <div className="w-8 h-8 bg-cyan-400 text-blue-900 flex items-center justify-center rounded-full ring-2 ring-white ring-opacity-30 text-sm font-bold">
                    👤
                </div>
            </div>

        </header>


    )

}