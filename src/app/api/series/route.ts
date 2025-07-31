import { NextResponse } from 'next/server';
import path from 'path';
import ConexaoBD from '@/lib/ConexaoBD';

const caminho = path.resolve(process.cwd(), 'src/bd/series-bd.json');

export async function GET() {
  const dados = await ConexaoBD.retornaBD(caminho);
  return NextResponse.json(dados);
}

export async function POST(req: Request) {
  const body = await req.json();
  const dados = await ConexaoBD.retornaBD(caminho);

  const novaSerie = {
    id: Date.now(),
    titulo: body.titulo
  };

  dados.push(novaSerie);
  await ConexaoBD.armazenaBD(caminho, dados);

  return NextResponse.json(novaSerie, { status: 201 });
}
