// Para ler e gravar arquivos com Node.js (usado em rotas API do Next.js)
import { promises as fs } from 'fs';

// Lê e retorna o conteúdo do arquivo JSON como array de objetos
async function retornaBD(arquivo: string) {
  const dados = await fs.readFile(arquivo, 'utf-8');
  return JSON.parse(dados);
}

// Sobrescreve o conteúdo do arquivo com os novos dados
async function armazenaBD(arquivo: string, dados: any) {
  await fs.writeFile(arquivo, JSON.stringify(dados, null, 2));
}

// Exporta as funções em um objeto
const ConexaoBD = {
  retornaBD,
  armazenaBD
};

export default ConexaoBD;