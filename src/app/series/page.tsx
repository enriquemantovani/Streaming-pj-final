
"use client";

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Modal from 'react-modal';
Modal.setAppElement('body');

=======
import { Pencil, Search, SquarePen, Trash } from "lucide-react";
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
                                <button className="bg-green-400 text-lg md:text-xl font-bold border border-black rounded-md hover:bg-green-600 transition duration-400">
                                    Criar serie
                                </button>
                                <button className="bg-green-400 text-lg md:text-xl font-bold border border-black rounded-md hover:bg-green-600 transition duration-400">
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

                        {/*Exemplos de séries*/}
                        
                        <div className="bg-white w-full min-h-[300px] border-2 flex flex-col border-black">
                            <div className="grid grid-cols-5 border-b-2 border-black text-black font-medium text-sm md:text-xl">
                                <p>Nome</p>
                                <p>Gênero</p>
                                <p>Data lançamento</p>
                                <p>Idioma</p>
                                <p><SquarePen/></p>
                            </div>

                            <div className="grid grid-cols-5 items-center border-b-2 border-black text-black font-medium text-sm md:text-base">
                                <p>Stranger Things</p>
                                <p>Terror</p>
                                <p>2018</p>
                                <p>Inglês</p>
                                {/*Botoes de editar e deletar do desktop*/}
                                <div className="hidden xl:flex">
                                    <button className="bg-amber-500 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-amber-600 transition duration-400 p-1">
                                        Editar
                                    </button>
                                    <button className="bg-red-600 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-red-800 transition duration-400 p-1">
                                        Remover
                                    </button>
                                </div>

                                {/*Botoes de editar e deletar do mobile*/}
                                <div className="flex gap-2 xl:hidden">
                                    <Pencil/>
                                    <Trash/>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 items-center border-b-2 border-black text-black font-medium text-sm md:text-base">
                                <p>Breaking Bad</p>
                                <p>Ação</p>
                                <p>2011</p>
                                <p>Inglês</p>
                                {/*Botoes de editar e deletar do desktop*/}
                                <div className="hidden xl:flex">
                                    <button className="bg-amber-500 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-amber-600 transition duration-400 p-1">
                                        Editar
                                    </button>
                                    <button className="bg-red-600 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-red-800 transition duration-400 p-1">
                                        Remover
                                    </button>
                                </div>

                                {/*Botoes de editar e deletar do mobile*/}
                                <div className="flex gap-2 xl:hidden">
                                    <Pencil/>
                                    <Trash/>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 items-center border-b-2 border-black text-black font-medium text-sm md:text-base">
                                <p>Dr.House</p>
                                <p>Drama</p>
                                <p>2008</p>
                                <p>Inglês</p>
                                {/*Botoes de editar e deletar do desktop*/}
                                <div className="hidden xl:flex">
                                    <button className="bg-amber-500 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-amber-600 transition duration-400 p-1">
                                        Editar
                                    </button>
                                    <button className="bg-red-600 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-red-800 transition duration-400 p-1">
                                        Remover
                                    </button>
                                </div>

                                {/*Botoes de editar e deletar do mobile*/}
                                <div className="flex gap-2 xl:hidden">
                                    <Pencil/>
                                    <Trash/>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 items-center border-b-2 border-black text-black font-medium text-sm md:text-base">
                                <p>Round 6</p>
                                <p>Ação</p>
                                <p>2021</p>
                                <p>Coreano</p>
                                {/*Botoes de editar e deletar do desktop*/}
                                <div className="hidden xl:flex">
                                    <button className="bg-amber-500 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-amber-600 transition duration-400 p-1">
                                        Editar
                                    </button>
                                    <button className="bg-red-600 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-red-800 transition duration-400 p-1">
                                        Remover
                                    </button>
                                </div>

                                {/*Botoes de editar e deletar do mobile*/}
                                <div className="flex gap-2 xl:hidden">
                                    <Pencil/>
                                    <Trash/>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 items-center border-b-2 border-black text-black font-medium text-sm md:text-base">
                                <p>Shrek</p>
                                <p>Animação</p>
                                <p>2012</p>
                                <p>Inglês</p>
                                {/*Botoes de editar e deletar do desktop*/}
                                <div className="hidden xl:flex">
                                    <button className="bg-amber-500 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-amber-600 transition duration-400 p-1">
                                        Editar
                                    </button>
                                    <button className="bg-red-600 text-xl text-white font-bold rounded-sm border-2 border-black hover:bg-red-800 transition duration-400 p-1">
                                        Remover
                                    </button>
                                </div>

                                {/*Botoes de editar e deletar do mobile*/}
                                <div className="flex gap-2 xl:hidden">
                                    <Pencil/>
                                    <Trash/>
                                </div>
                            </div>
                            
                        </div>
