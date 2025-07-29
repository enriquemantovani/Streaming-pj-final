import Link from "next/link"

export default function GenerosPage(){

    return(


        <main className="flex-grow">

            <div className="flex flex-col items-center gap-20 bg-blue-500">

                {/* Section da pagina generos */}

                <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20 w-full">
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-4xl text-white font-bold">Procure pelos seus gêneros favoritos!</p>
                        <p className="text-xl text-white"> Escolha o filme que mais bem combina com você e aproveite! </p>
                    </div>
                </section>

                {/* Menu da pagina generos */}

                <div className="flex flex-col items-center gap-8 border-2 border-white max-w-2/3 min-w-2/3 bg-blue-800 my-20">

                    <div className="flex justify-center min-w-1/8 border-b-2 border-l-2 border-r-2 border-black text-2xl">
                        <h2>Menu</h2>
                    </div>

                    <div className="flex w-full min-h-[300px]">
                        <div className="bg-white w-3/5 border-2 border-black">
                            <p>Lorem</p>
                        </div>

                        <div className="flex justify-center items-center bg-gray-400 border-t-2 border-r-2 border-b-2 border-black w-8">
                            <p className="text-3xl">‖</p>
                        </div>

                    </div>

                    <div className="flex justify-around w-full my-8">
                        <div className="flex gap-8">
                            <button className="bg-green-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-green-600 transition duration-400">
                                Criar gênero
                            </button>

                            <button className="bg-green-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-green-600 transition duration-400">
                                Listar Todos 
                            </button>
                        </div>

                        <div className="flex gap-8">
                            <button className="bg-amber-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-amber-500 transition duration-400 py-2 px-4">
                                Editar
                            </button>

                            <button className="bg-red-600 text-white text-xl font-bold border border-black rounded-xl hover:bg-red-800 transition duration-400 py-2 px-4">
                                Deletar
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </main>


    )

}