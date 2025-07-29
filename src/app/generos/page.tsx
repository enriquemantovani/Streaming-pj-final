export default function GenerosPage(){

    return(


        <main className="flex-grow">

            <div className="flex flex-col gap-20 bg-blue-500">

                <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20">
                    <div className="flex flex-col items-center gap-6 container mx-auto">
                        <h1 className="text-4xl text-white font-bold">Procure pelos seus gêneros favoritos!</h1>
                        <p className="text-xl text-white"> Escolha o filme que mais bem combina com você e aproveite! </p>
                    </div>
                </section>

                <div className="flex flex-col items-center container mx-auto gap-8 border-2 max-w-2/3 bg-blue-800 my-20">

                    <div className="flex justify-center min-w-1/8 border-b-2 border-l-2 border-r-2 border-black text-2xl">
                        <h2>Menu</h2>
                    </div>

                    <div className="flex w-full">
                        <div className="bg-white w-3/5 py-28">
                            <p>Lorem</p>
                        </div>

                        <div className="flex justify-center bg-gray-400 w-8 py-28">
                            <p className="text-3xl">‖</p>
                        </div>

                    </div>

                    <div className="flex justify-around w-full border-2 my-8 border-white">
                        <div className="flex gap-8">
                            <button className="bg-green-400 text-white text-xl font-bold border border-black hover:bg-green-500 transition duration-400">
                                Criar gênero
                            </button>

                            <button className="bg-green-400 text-white text-xl font-bold border border-black hover:bg-green-500 transition duration-400">
                                Listar Todos 
                            </button>
                        </div>

                        <div className="flex gap-8">
                            <button className="bg-amber-400 text-white text-xl font-bold border border-black hover:bg-amber-500 transition duration-400 p-2 px-4">
                                Editar
                            </button>

                            <button className="bg-red-600 text-white text-xl font-bold border border-black hover:bg-red-700 transition duration-400 p-2 px-4">
                                Deletar
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </main>


    )

}