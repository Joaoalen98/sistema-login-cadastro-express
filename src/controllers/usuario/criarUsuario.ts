import { Request, Response } from 'express';
import prisma from '../../prisma';
import { hash } from 'bcryptjs';

async function criarUsuario(req: Request, res: Response) {

    const { nome, email, senha } = req.body

    const usuarioExiste = await prisma.usuario.findFirst({
        where: {
            email: email
        }
    })

    if (usuarioExiste) {
        throw new Error('Usuario já existe!')
    }

    const senhaHash = await hash(senha, 8);

    const novoUsuario = await prisma.usuario.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaHash
        },
        select: {
            nome: true,
            email: true,
            id: true
        }
    })

    res.json(novoUsuario)
}

export default criarUsuario