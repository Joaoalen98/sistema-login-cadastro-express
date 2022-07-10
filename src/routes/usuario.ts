import { Router } from "express";

import criarUsuario from "../controllers/usuario/criarUsuario";
import detalhesUsuario from "../controllers/usuario/detalhesUsuario";
import loginUsuario from "../controllers/usuario/loginUsuario";

import estaLogado from "../middlewares/estaLogado";

const usuarioRouter = Router()

usuarioRouter
.post('/sign', criarUsuario)
.post('/login', loginUsuario)
.get('/user', estaLogado, detalhesUsuario)

export default usuarioRouter