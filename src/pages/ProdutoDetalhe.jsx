import { useParams } from "react-router-dom";
import Pix from "react-qrcode-pix";

import carnavalmanicure from "../assets/carnavalmanicure.jpg";
import coloracaomechas from "../assets/coloracaomechas.jpg";
import escovacao from "../assets/escovacao.jpg";
import escovação from "../assets/escovação.jpg";
import manicure from "../assets/manicure.jpg";
import cortemasculino from "../assets/cortemasculino.jpg";
import sobrancelha from "../assets/sobrancelha.jpg";
import cortefeminino from "../assets/cortefeminino.jpg";

const produtos = [
  { id: 1, nome: "Manicure Carnaval", preco: "R$ 80,00", descricao: "Serviço especial de manicure com temática de carnaval.", imagem: carnavalmanicure },
  { id: 2, nome: "Coloração Mechas", preco: "R$ 150,00", descricao: "Coloração profissional de mechas para todos os estilos.", imagem: coloracaomechas },
  { id: 3, nome: "Escovacao", preco: "R$ 60,00", descricao: "Escovação perfeita para brilho e movimento.", imagem: escovacao },
  { id: 4, nome: "Manicure", preco: "R$ 50,00", descricao: "Manicure tradicional para mãos impecáveis.", imagem: manicure },
  { id: 5, nome: "Escovação", preco: "R$ 90,00", descricao: "Escovação especial para cabelos com tratamento profundo.", imagem: escovação },
  { id: 6, nome: "Corte Masculino", preco: "R$ 50,00", descricao: "Corte masculino moderno e estiloso para realçar sua personalidade.", imagem: cortemasculino },
  { id: 7, nome: "Sobrancelha", preco: "R$ 40,00", descricao: "Design de sobrancelha para realçar a beleza do seu olhar.", imagem: sobrancelha },
  { id: 8, nome: "Corte Feminino", preco: "R$ 40,00", descricao: "Corte feminino personalizado para realçar sua beleza única.", imagem: cortefeminino },
];

function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }

  // Remove "R$ " e converte "80,00" em 80
  const valorNumerico = parseFloat(produto.preco.replace("R$ ", "").replace(",", "."));

  // SUA CHAVE PIX AQUI
  const chavePIX = "84992160269"; // sua chave por exemplo telefone

  return (
    <div style={{ marginTop: "120px", textAlign: "center" }}>
      <h2>{produto.nome}</h2>
      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{produto.descricao}</p>
      <p><strong>{produto.preco}</strong></p>

      {/* QR Code PIX com valor */}
      <div style={{ marginTop: "30px" }}>
        <h3>Pagamento via PIX</h3>

        <Pix
          pixkey={chavePIX}
          merchant="Seu Nome ou Empresa"
          city="SuaCidade"
          amount={valorNumerico}
          size={200}
        />

        <p style={{ marginTop: "10px" }}>Escaneie o código para pagar</p>
        <p><strong>{chavePIX}</strong></p>
      </div>
    </div>
  );
}

export default ProdutoDetalhe;
