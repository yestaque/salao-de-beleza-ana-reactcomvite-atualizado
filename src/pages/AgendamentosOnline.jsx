import { useState, useEffect } from "react";

function AgendamentosOnline() {
  const [servico, setServico] = useState("");
  const [profissional, setProfissional] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [erro, setErro] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  const numeroWhatsApp = "5584992160269";

  const horariosDisponiveis = [
    "09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"
  ];

  // Horários ocupados do dia selecionado
  const horariosOcupados = agendamentos
    .filter(a => a.data === data)
    .map(a => a.hora);

  const validarFormulario = () => {
    if (!servico || !profissional || !data || !hora) {
      setErro("⚠️ Preencha todos os campos.");
      return false;
    }
    const diaSemana = new Date(data).getDay();
    if (diaSemana === 0) {
      setErro("❌ Não atendemos aos domingos.");
      return false;
    }
    if (horariosOcupados.includes(hora)) {
      setErro("⛔ Esse horário já está ocupado.");
      return false;
    }
    setErro("");
    return true;
  };

  const confirmarAgendamento = () => {
    if (!validarFormulario()) return;

    // Salva no array local
    const novoAgendamento = { servico, profissional, data, hora };
    setAgendamentos([...agendamentos, novoAgendamento]);

    // Envia WhatsApp
    const mensagem = `Olá! Gostaria de agendar:
Serviço: ${servico}
Profissional: ${profissional}
Data: ${data}
Horário: ${hora}`;

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsApp, "_blank");

    alert("✅ Agendamento realizado com sucesso!");

    setServico(""); setProfissional(""); setData(""); setHora("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Agendamento Online 💅</h1>
      <p style={styles.subtitulo}>Escolha o serviço e finalize pelo WhatsApp</p>

      <div style={styles.form}>
        <label>Escolher Serviço</label>
        <select value={servico} onChange={(e) => setServico(e.target.value)}>
          <option value="">Selecione</option>
          <option>Corte Feminino</option>
          <option>Escovação</option>
          <option>Manicure</option>
          <option>Pedicure</option>
          <option>Progressiva</option>
          <option>Coloração</option>
          <option>Sobrancelha</option>
          <option>Corte Masculino</option>
          <option>Tintura</option>
        </select>

        <label>Escolher Profissional</label>
        <select value={profissional} onChange={(e) => setProfissional(e.target.value)}>
          <option value="">Selecione</option>
          <option>Ana</option>
        </select>

        <label>Escolher Data</label>
        <input
          type="date"
          value={data}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Escolher Horário</label>
        <select value={hora} onChange={(e) => setHora(e.target.value)}>
          <option value="">Selecione</option>
          {horariosDisponiveis.map(h => (
            <option key={h} value={h} disabled={horariosOcupados.includes(h)}>
              {h} {horariosOcupados.includes(h) ? "(Ocupado)" : ""}
            </option>
          ))}
        </select>

        {erro && <p style={styles.erro}>{erro}</p>}

        <button style={styles.botao} onClick={confirmarAgendamento}>
          Confirmar Agendamento
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff0f5",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  titulo: {
    textAlign: "center",
    color: "#c2185b",
  },
  subtitulo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  botao: {
    marginTop: "15px",
    padding: "10px",
    background: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  erro: {
    color: "red",
    fontWeight: "bold",
    marginTop: "5px",
  },
};

export default AgendamentosOnline;
