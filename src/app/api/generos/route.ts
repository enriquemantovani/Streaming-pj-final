import { NextResponse } from "next/server";
import path from "path";
import ConexaoBD from "@/lib/ConexaoBD";

const caminho = path.resolve(process.cwd(), "src/bd/generos-bd.json");

export async function GET() {
  const dados = await ConexaoBD.retornaBD(caminho);
  return NextResponse.json(dados);
}

export async function POST(req: Request) {
  const body = await req.json();
  const dados = await ConexaoBD.retornaBD(caminho);

  const novoGenero = { id: Date.now(), nome: body.nome };
  dados.push(novoGenero);

  await ConexaoBD.armazenaBD(caminho, dados);
  return NextResponse.json(novoGenero, { status: 201 });
}
