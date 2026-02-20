import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios"; // coloque no topo junto com os outros imports

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro MongoDB:", err));

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.post("/api/pix", async (req, res) => {
  const { amount, description } = req.body;

  try {
    const response = await axios.post(
      "https://pixgo.org/api/v1", // exemplo da PixGo API
      {
        amount: amount,
        // você pode adicionar mais campos exigidos pela API
      },
      {
        headers: {
          "X-API-Key": "SEU_PIXGO_API_KEY", // sua chave real da PixGo
          "Content-Type": "application/json"
        }
      }
    );

    const pixData = response.data;
    res.json(pixData);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao gerar PIX." });
  }
});


// Exemplo rota produtos
const produtos = [
  { id: 1, nome: "Manicure Carnaval", preco: 80 },
  { id: 2, nome: "Coloração Mechas", preco: 150 },
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// ROTA PARA GERAR PIX DINÂMICO
app.post("/api/pix", async (req, res) => {
  const { amount, description } = req.body;

  try {
    const response = await axios.post(
      "https://api.exemplo-pix.com/v1/charges", // substituir pela API real
      {
        amount,
        description
      },
      {
        headers: {
          Authorization: "Bearer SEU_TOKEN_DO_FORNECEDOR_PIX"
        }
      }
    );

    const { qr_code, copy_paste_code } = response.data;

    res.json({ qr_code, copy_paste_code });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao gerar PIX" });
  }
});

