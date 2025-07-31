import path from 'path';
import ConexaoBD from './ConexaoBD';

const CAMINHO_BD = path.resolve(process.cwd(), 'src/bd/series-bd.json');

export interface Serie {
  id: number;
  titulo: string;
}

export async function adicionarSerie(nova: Omit<Serie, 'id'>): Promise<Serie> {
  const series = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novoId = series.length > 0 ? series[series.length - 1].id + 1 : 1;
  const novaSerie: Serie = { id: novoId, ...nova };
  series.push(novaSerie);
  await ConexaoBD.armazenaBD(CAMINHO_BD, series);
  return novaSerie;
}

export async function atualizarSerie(id: number, dadosAtualizados: Partial<Omit<Serie, 'id'>>): Promise<Serie | null> {
  const series = await ConexaoBD.retornaBD(CAMINHO_BD);
  const index = series.findIndex((s: Serie) => s.id === id);
  if (index === -1) return null;
  series[index] = { ...series[index], ...dadosAtualizados };
  await ConexaoBD.armazenaBD(CAMINHO_BD, series);
  return series[index];
}

export async function deletarSerie(id: number): Promise<boolean> {
  const series = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novasSeries = series.filter((s: Serie) => s.id !== id);
  if (novasSeries.length === series.length) return false;
  await ConexaoBD.armazenaBD(CAMINHO_BD, novasSeries);
  return true;
}

export async function listarSeries(): Promise<Serie[]> {
  return await ConexaoBD.retornaBD(CAMINHO_BD);
}
