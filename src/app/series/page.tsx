"use client";

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Modal from 'react-modal';
Modal.setAppElement('body');


interface Serie {
  id: number;
  titulo: string;
}

export default function SeriesPage() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editando, setEditando] = useState<Serie | null>(null);
  const [tituloInput, setTituloInput] = useState('');

  const carregarSeries = async () => {
    const res = await fetch('/api/series');
    const dados = await res.json();
    setSeries(dados);
  };

  useEffect(() => {
    carregarSeries();
  }, []);

  const abrirModal = (serie?: Serie) => {
    setEditando(serie ?? null);
    setTituloInput(serie?.titulo ?? '');
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setModalIsOpen(false);
    setEditando(null);
    setTituloInput('');
  };

  const salvarSerie = async () => {
    if (editando) {
      await fetch(`/api/series/${editando.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: tituloInput }),
      });
    } else {
      await fetch('/api/series', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: tituloInput }),
      });
    }
    fecharModal();
    carregarSeries();
  };

  const deletarSerie = async (id: number) => {
    if (confirm('Deseja realmente apagar esta série?')) {
      await fetch(`/api/series/${id}`, { method: 'DELETE' });
      carregarSeries();
    }
  };

  return (
    <main className="flex-grow bg-blue-600">

        <div className='flex flex-col gap-40'>

            {/*Seção Hero da pagina series*/}
            <section className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20">
                <div className="flex flex-col items-center gap-6 container mx-auto">
                    <h2 className="text-4xl text-center text-white font-bold">Descubra todos os seus favoritos em um piscar de olhos!</h2>
                    <p className="text-xl text-center text-white"> Aproveite de uma seleção variada de títulos para escolher! </p>
                </div>
            </section>
            
            {/*Menu de séries */}
            <div className="flex flex-col gap-8 bg-blue-500 rounded-xl p-8 mb-50 mx-8">
                <section className="text-center text-white">
                <h2 className="text-4xl font-bold">Menu de séries</h2>
                </section>
                <div className="flex justify-between">
                <button
                    className="bg-green-500 px-4 py-2 font-bold text-white rounded hover:bg-green-700"
                    onClick={() => abrirModal()}
                >
                    Criar série
                </button>
                <div className="hidden md:flex gap-2">
                    <input className="px-2 border border-black" placeholder="Pesquisar..." />
                    <button className="text-white">
                    <Search />
                    </button>
                </div>
                </div>
                <div className="bg-white rounded shadow p-4">
                {series.length === 0 ? (
                    <p>Nenhuma série cadastrada.</p>
                ) : (
                    <ul className="space-y-4">
                    {series.map((serie) => (
                        <li key={serie.id} className="flex justify-between items-center border-b pb-2 text-black font-md text-lg">
                        <span>{serie.titulo}</span>
                        <div className="space-x-2">
                            <button
                            onClick={() => abrirModal(serie)}
                            className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                            >
                            Editar
                            </button>
                            <button
                            onClick={() => deletarSerie(serie.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                            >
                            Apagar
                            </button>
                        </div>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Modal Série"
                className="bg-white p-6 rounded shadow max-w-md mx-auto mt-32"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                <h2 className="text-blue-500 text-xl font-bold mb-4">
                    {editando ? 'Editar Série' : 'Criar Nova Série'}
                </h2>
                <input
                    value={tituloInput}
                    onChange={(e) => setTituloInput(e.target.value)}
                    placeholder="Título da série"
                    className="w-full border p-2 mb-4 text-black font-md text-lg"
                />
                <div className="flex justify-end gap-2">
                    <button onClick={fecharModal} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                    Cancelar
                    </button>
                    <button
                    onClick={salvarSerie}
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
