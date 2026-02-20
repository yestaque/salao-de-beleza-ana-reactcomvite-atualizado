import { useParams } from "react-router-dom";
import carnavalmanicure from "../assets/carnavalmanicure.jpg";
import coloracaomechas from "../assets/coloracaomechas.jpg";
import escovacao from "../assets/escovacao.jpg";
import manicure from "../assets/manicure.jpg";
import escovação from "../assets/escovação.jpg";
import cortemasculino from "../assets/cortemasculino.jpg";
import sobrancelha from "../assets/sobrancelha.jpg";
import cortefeminino from "../assets/cortefeminino.jpg";
import pedicure from "../assets/pedicure.jpg";
import progressiva from "../assets/progressiva.jpg";
import { useNavigate } from "react-router-dom";

const produtos = [
  { id: 1, nome: "Manicure Carnaval", preco: "R$ 80,00", descricao: "Serviço especial de manicure com temática de carnaval.", imagem: carnavalmanicure },
  { id: 2, nome: "Coloração Mechas", preco: "R$ 150,00", descricao: "Coloração profissional de mechas para todos os estilos.", imagem: coloracaomechas },
  { id: 3, nome: "Tintura", preco: "R$ 60,00", descricao: "Tintura profissional para cabelos com tratamento especial.", imagem: escovacao },
  { id: 4, nome: "Manicure", preco: "R$ 50,00", descricao: "Manicure tradicional para mãos impecáveis.", imagem: manicure },
  { id: 5, nome: "Pedicure", preco: "R$ 70,00", descricao: "Pedicure completa para pés macios e bem cuidados.", imagem: pedicure },
  { id: 6, nome: "Escovação", preco: "R$ 90,00", descricao: "Escovação especial para cabelos com tratamento profundo.", imagem: escovação },
  { id: 7, nome: "Progressiva", preco: "R$ 200,00", descricao: "Alisamento progressivo para cabelos lisos e brilhantes.", imagem: progressiva },
  { id: 8, nome: "Corte Masculino", preco: "R$ 50,00", descricao: "Corte masculino moderno e estiloso para realçar sua personalidade.", imagem: cortemasculino },
  { id: 9, nome: "Sobrancelha", preco: "R$ 40,00", descricao: "Design de sobrancelha para realçar a beleza do seu olhar.", imagem: sobrancelha },
  { id: 10, nome: "Corte Feminino", preco: "R$ 40,00", descricao: "Corte feminino personalizado para realçar sua beleza única.", imagem: cortefeminino },
];

function Loja() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "100px"
    }}>
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            transition: "transform 0.2s"
          }}
          onClick={() => navigate(`/produto/${produto.id}`)}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h3>{produto.nome}</h3>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default Loja;
