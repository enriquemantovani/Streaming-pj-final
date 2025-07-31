
"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

interface Genero {
  id: number;
  nome: string;
}

export default function GenerosPage() {
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editando, setEditando] = useState<Genero | null>(null);
  const [nomeInput, setNomeInput] = useState("");

  const carregarGeneros = async () => {
    const res = await fetch("/api/generos");
    const dados = await res.json();
    setGeneros(dados);
  };

  useEffect(() => {
    carregarGeneros();
  }, []);

  const abrirModal = (genero?: Genero) => {
    setEditando(genero ?? null);
    setNomeInput(genero?.nome ?? "");
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setModalIsOpen(false);
    setEditando(null);
    setNomeInput("");
  };

  const salvarGenero = async () => {
    if (editando) {
      await fetch(`/api/generos/${editando.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeInput }),
      });
    } else {
      await fetch("/api/generos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nomeInput }),
      });
    }
    fecharModal();
    carregarGeneros();
  };

  const deletarGenero = async (id: number) => {
    if (confirm("Deseja realmente apagar este gênero?")) {
      await fetch(`/api/generos/${id}`, { method: "DELETE" });
      carregarGeneros();
    }
  };

  return (
    <main className="flex-grow bg-blue-600">

      <div className="flex flex-col gap-40">

        {/*Seção Hero da pagina de generos*/}

        <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20">
          <div className="flex flex-col items-center gap-6 container mx-auto">
            <h2 className="text-4xl text-center text-white font-bold">Procure pelos seus gêneros favoritos!</h2>
            <p className="text-xl text-center text-white"> Escolha o filme que mais bem combina com você e aproveite! </p>
          </div>
        </section>

        {/*Menu de gêneros*/}

        <div className="flex flex-col items-center gap-10 bg-blue-500 rounded-xl p-8 mx-8 mb-50">
          <h2 className="text-3xl font-bold text-white">Menu de gêneros</h2>
          <button
            onClick={() => abrirModal()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Criar gênero
          </button>
          <div className="bg-white w-full max-w-2xl p-4 rounded shadow">
            {generos.length === 0 ? (
              <p>Nenhum gênero cadastrado.</p>
            ) : (
              <ul className="space-y-2">
                {generos.map((g) => (
                  <li key={g.id} className="flex justify-between items-center border-b pb-1 text-black font-md text-lg">
                    <span>{g.nome}</span>
                    <div className="space-x-2">
                      <button
                        onClick={() => abrirModal(g)}
                        className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deletarGenero(g.id)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-800"
                      >
                        Deletar
                      </button>
=======
import { AlignJustify } from "lucide-react"
import Link from "next/link"

export default function GenerosPage(){

    return(


        <main className="flex-grow">

            <div className="flex flex-col items-center gap-20 bg-blue-500">

                {/* Section da pagina generos */}

                <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20 w-full">
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-4xl text-center text-white font-bold">Procure pelos seus gêneros favoritos!</p>
                        <p className="text-xl text-center text-white"> Escolha o filme que mais bem combina com você e aproveite! </p>
                    </div>
                </section>

                {/* Menu da pagina generos */}

                <div className="flex flex-col items-center gap-8 border-2 border-white max-w-5/6 md:max-w-2/3 min-w-2/3 bg-blue-800 my-20">

                    <div className="flex justify-center min-w-1/8 border-b-2 border-l-2 border-r-2 border-black text-2xl">
                        <h2>Menu</h2>
                    </div>

                    <div className="flex w-full min-h-[300px]">
                        <div className="bg-white w-4/5 md:w-7/10 border-2 border-black text-black text-2xl font-medium flex flex-col">

                            {/*Exemplo de gêneros*/}
                            <p>Ação</p>
                            <p>Ficção</p>
                            <p>Comédia</p>
                            <p>Super Herói</p>
                            <p>Suspense</p>
                            <p>Terror</p>
                            <p>Policial</p>
                            <p>Dorama</p>
                        </div>

                        <div className="flex justify-center items-center bg-gray-400 border-t-2 border-r-2 border-b-2 border-black w-8">
                            <p className="text-3xl"><AlignJustify/></p>
                        </div>

                    </div>

                    <div className="flex justify-around w-full my-8">
                        <div className="flex gap-8">
                            <button className="bg-green-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-green-600 transition duration-400 py-2 px-4">
                                Criar gênero
                            </button>

                            <button className="bg-green-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-green-600 transition duration-400 py-2 px-4">
                                Listar Todos 
                            </button>
                        </div>

                        {/*Botões de editar e remover do desktop*/}

                        <div className="hidden md:flex gap-8">
                            <button className="bg-amber-400 text-white text-xl font-bold border border-black rounded-xl hover:bg-amber-500 transition duration-400 py-2 px-4">
                                Editar
                            </button>

                            <button className="bg-red-600 text-white text-xl font-bold border border-black rounded-xl hover:bg-red-800 transition duration-400 py-2 px-4">
                                Deletar
                            </button>
                        </div>


