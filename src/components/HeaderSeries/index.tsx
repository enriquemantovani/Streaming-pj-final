import Link from "next/link"

export default function HeaderSeries(){

    return(

        <header className="flex justify-between bg-blue-800 p-4">
            <div>
                <h1 className="font-extrabold text-4xl text-cyan-500">Byron.TV</h1>
            </div>
            <div className="flex gap-4 text-2xl font-bold text-white">
                <Link href="/">
                    Início
                </Link>

                <Link href="/series">
                    Séries
                </Link>

                <Link href="/">
                    Gêneros
                </Link>

                <Link href="/">
                    Minha Lista
                </Link>
            </div>
            <div>
                <h3 className="text-black text-3xl">Icones custom</h3>
            </div>
        </header>


    )

}