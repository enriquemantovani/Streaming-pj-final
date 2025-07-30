import { Search } from "lucide-react";
import Link from "next/link";

export default function SeriesPage() {

    return(

        <main className="flex-grow">

            
            <div className="flex flex-col gap-20 bg-blue-500">

                {/* Seção Hero da pagina series*/}

                <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20">
                    <div className="flex flex-col items-center gap-6 container mx-auto">
                        <h2 className="text-4xl text-center text-white font-bold">Descubra todos os seus favoritos em um piscar de olhos!</h2>
                        <p className="text-xl text-center text-white"> Aproveite de uma seleção variada de títulos para escolher! </p>
                    </div>
                </section>

                <div className="flex flex-col items-center container mx-auto gap-8 border-2 max-w-4/5 md:max-w-2/3 bg-blue-800 my-20">

                    <div className="flex justify-center min-w-1/8 border-b-2 border-l-2 border-r-2 border-black text-2xl">
                        <h2>Menu</h2>
                    </div>

                    <div className="w-full">
                        <div className="flex justify-between">
                            <div className="flex gap-8">
                                <button className="bg-green-400 text-lg md:text-xl font-bold border border-black hover:bg-green-600 transition duration-400">
                                    Criar serie
                                </button>
                                <button className="bg-green-400 text-lg md:text-xl font-bold border border-black hover:bg-green-600 transition duration-400">
                                    Listar todos
                                </button>
                            </div>

                            {/*Barra de pesquisa no desktop*/}
                            
                            <div className="hidden md:flex gap-1">

                                <input className="bg-white border-2 border-black" type="text" placeholder="Pesquisar..." />

                                <button className="text-xl">
                                    <Search/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="bg-white w-full py-24 border-2 border-black">
                            <p>a</p>
                        </div>

                        {/* Barra de pesquisa no mobile */}

                        <div className="flex justify-end my-4 md:hidden">

                            <input className="bg-white border-2 border-black" type="text" placeholder="Pesquisar..." />

                                <button className="text-xl">
                                    <Search/>
                                </button>

                        </div>

                    </div>

                </div>


            </div>

        </main>


    )

}