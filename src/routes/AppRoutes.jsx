import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loja from "../pages/Loja";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";
import Home from "../pages/Home";         // Página inicial
import Login from "../pages/Login";       // Login
import Contato from "../pages/Contato";   // Contato
import Menu from "../components/Menu";
import Pagamentos from "../pages/Pagamentos"; // Pagamentos
import AgendamentosOnline from "../pages/AgendamentosOnline";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/AgendamentosOnline" element={<AgendamentosOnline />} />
      </Routes>
    </BrowserRouter>
  );
}
