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
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
            contentLabel="Modal Gênero"
            className="bg-white p-6 rounded shadow max-w-md mx-auto mt-32"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          >
            <h2 className="text-blue-500 text-xl font-bold mb-4">
              {editando ? "Editar Gênero" : "Criar Novo Gênero"}
            </h2>
            <input
              value={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
              placeholder="Nome do gênero"
              className="w-full border p-2 mb-4 text-black font-md text-lg"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={fecharModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={salvarGenero}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Salvar
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </main>
  );
}
