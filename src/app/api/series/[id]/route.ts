import { NextResponse } from 'next/server';
import path from 'path';
import ConexaoBD from '@/lib/ConexaoBD';

const caminho = path.resolve(process.cwd(), 'src/bd/series-bd.json');

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();
  const dados = await ConexaoBD.retornaBD(caminho);

  const index = dados.findIndex((serie: any) => serie.id === id);
  if (index === -1) {
    return NextResponse.json({ erro: 'Série não encontrada' }, { status: 404 });
  }

  dados[index].titulo = body.titulo;
  await ConexaoBD.armazenaBD(caminho, dados);

  return NextResponse.json(dados[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  let dados = await ConexaoBD.retornaBD(caminho);

  const existe = dados.some((serie: any) => serie.id === id);
  if (!existe) {
    return NextResponse.json({ erro: 'Série não encontrada' }, { status: 404 });
  }

  dados = dados.filter((serie: any) => serie.id !== id);
  await ConexaoBD.armazenaBD(caminho, dados);

  return NextResponse.json({ mensagem: 'Série deletada com sucesso' });
}
