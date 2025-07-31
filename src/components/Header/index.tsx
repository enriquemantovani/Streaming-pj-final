import { Bell, Search, User } from "lucide-react"
import Link from "next/link"

export default function Header(){

    return(

        <header className="bg-blue-900/90 backdrop-blur px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">

            {/*Header no mobile*/}

            <div className="w-full flex justify-center md:hidden">
                <nav className="flex gap-8 md:hidden">
                    <Link href="/" className="hover:text-cyan-300 transition">Início</Link>
                    <Link href="/series" className="hover:text-cyan-300 transition">Séries</Link>
                    <Link href="/generos" className="hover:text-cyan-300 transition">Gêneros</Link>
                </nav>
            </div>

            {/*Header no desktop*/}

            <h1 className="hidden md:inline text-3xl font-extrabold text-cyan-400 tracking-wide">Byron.tv</h1>
            <nav className="hidden md:flex gap-6 text-base font-medium">
                <Link href="/" className="hover:text-cyan-300 transition">Início</Link>
                <Link href="/series" className="hover:text-cyan-300 transition">Séries</Link>
                <Link href="/generos" className="hover:text-cyan-300 transition">Gêneros</Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
                <button className="text-xl hover:text-cyan-300 transition"><Search/></button>
                <button className="text-xl hover:text-cyan-300 transition"><Bell/></button>
                <div className="w-8 h-8 bg-cyan-400 text-blue-900 flex items-center justify-center rounded-full ring-2 ring-white ring-opacity-30 text-sm font-bold">
                    <User/>
                </div>
            </div>
        </header>
    )
}