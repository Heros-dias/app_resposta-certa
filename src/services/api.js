import axios from "axios";

export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

const normalizarEmail = (email) => email.trim().toLowerCase();

export async function testarConexao() {
  const { data } = await api.get("/status/1");
  return data;
}

export async function loginUsuario({ email, senha }) {
  if (!email.trim() || !senha.trim()) {
    throw new Error("Preencha email e senha.");
  }

  const { data } = await api.get("/usuarios", {
    params: { email: normalizarEmail(email) },
  });

  const usuario = data.find((item) => item.senha === senha);

  if (!usuario) {
    throw new Error("Email ou senha invalidos.");
  }

  return usuario;
}

export async function cadastrarUsuario({ nome, email, senha }) {
  if (!nome.trim() || !email.trim() || !senha.trim()) {
    throw new Error("Preencha nome, email e senha.");
  }

  const emailNormalizado = normalizarEmail(email);
  const { data: usuariosExistentes } = await api.get("/usuarios", {
    params: { email: emailNormalizado },
  });

  if (usuariosExistentes.length > 0) {
    throw new Error("Este email ja esta cadastrado.");
  }

  const novoUsuario = {
    nome: nome.trim(),
    email: emailNormalizado,
    senha,
    pontos: 0,
    acertos: 0,
    streak: 0,
  };

  const { data } = await api.post("/usuarios", novoUsuario);
  return data;
}

export async function listarAreas() {
  const { data } = await api.get("/areas");
  return data;
}

export async function buscarPlanoHoje() {
  const { data } = await api.get("/planosHoje");
  return data[0] || null;
}

export async function listarRanking() {
  const { data } = await api.get("/ranking");
  return [...data].sort((a, b) => b.pontos - a.pontos);
}

export async function listarGrupos() {
  const { data } = await api.get("/grupos");
  return data;
}

export async function criarGrupo(nome) {
  const { data } = await api.post("/grupos", {
    nome,
    membros: 1,
  });
  return data;
}

export async function buscarEstatisticas() {
  const { data } = await api.get("/estatisticas/1");
  return data;
}

export default api;
