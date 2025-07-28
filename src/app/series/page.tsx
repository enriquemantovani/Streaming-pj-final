import Link from "next/link";

export default function SeriesPage() {

    return(

        <main className="flex-grow">

            
            <div className="flex flex-col gap-20">

                {/* Seção Hero da pagina series*/}

                <section className="bg-blue-300 py-20">
                    <div className="flex flex-col items-center gap-6 container mx-auto">
                        <h1 className="text-2xl text-white font-bold">Descubra todos os seus favoritos em um piscar de olhos!</h1>
                        <p className="text-lg text-white"> Aproveite de uma seleção variada de títulos para escolher! </p>
                    </div>
                </section>

                <div className="flex flex-col items-center gap-8 border container mx-auto max-w-4xl">

                    <h2>Menu</h2>

                    <div className="flex justify-between container border">

                        <div className="flex gap-8">
                            <button className="bg-green-400 text-xl font-bold">
                                Criar serie
                            </button>
                            <button className="bg-green-400 text-xl font-bold">
                                Listar todos
                            </button>
                        </div>

                        <div>

                            <button>
                                Barra de navegação
                            </button>

                            <button>

                            </button>

                        </div>

                    </div>
                    
                    <div className="bg-white container mx-auto py-16">
                        <p>a</p>
                    </div>

                </div>

                {/*Footer temporario, ira ser apagado em breve depois*/}
                <footer className="flex bg-white text-2xl text-black font-bold py-12">
                    <p>oie</p>
                </footer>

            </div>

        </main>


    )

}