import path from "path";
import ConexaoBD from "./ConexaoBD";

const CAMINHO_BD = path.resolve(process.cwd(), "src/bd/generos-bd.json");

export interface Genero {
  id: number;
  nome: string;
}

export async function listarGeneros(): Promise<Genero[]> {
  return await ConexaoBD.retornaBD(CAMINHO_BD);
}

export async function adicionarGenero(novo: Omit<Genero, "id">): Promise<Genero> {
  const generos = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novoGenero: Genero = { id: Date.now(), ...novo };
  generos.push(novoGenero);
  await ConexaoBD.armazenaBD(CAMINHO_BD, generos);
  return novoGenero;
}

export async function atualizarGenero(id: number, dados: Partial<Omit<Genero, "id">>): Promise<Genero | null> {
  const generos = await ConexaoBD.retornaBD(CAMINHO_BD);
  const index = generos.findIndex((g: Genero) => g.id === id);
  if (index === -1) return null;
  generos[index] = { ...generos[index], ...dados };
  await ConexaoBD.armazenaBD(CAMINHO_BD, generos);
  return generos[index];
}

export async function deletarGenero(id: number): Promise<boolean> {
  const generos = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novos = generos.filter((g: Genero) => g.id !== id);
  if (novos.length === generos.length) return false;
  await ConexaoBD.armazenaBD(CAMINHO_BD, novos);
  return true;
}
