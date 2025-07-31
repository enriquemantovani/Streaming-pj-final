import { NextResponse } from "next/server";
import path from "path";
import ConexaoBD from "@/lib/ConexaoBD";

const caminho = path.resolve(process.cwd(), "src/bd/generos-bd.json");

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();
  const dados = await ConexaoBD.retornaBD(caminho);

  const index = dados.findIndex((g: any) => g.id === id);
  if (index === -1) return NextResponse.json({ erro: "Gênero não encontrado" }, { status: 404 });

  dados[index].nome = body.nome;
  await ConexaoBD.armazenaBD(caminho, dados);
  return NextResponse.json(dados[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  let dados = await ConexaoBD.retornaBD(caminho);

  const existe = dados.some((g: any) => g.id === id);
  if (!existe) return NextResponse.json({ erro: "Gênero não encontrado" }, { status: 404 });

  dados = dados.filter((g: any) => g.id !== id);
  await ConexaoBD.armazenaBD(caminho, dados);

  return NextResponse.json({ mensagem: "Gênero deletado com sucesso" });
}
