import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import prisma from '../../prisma';
import { sign } from 'jsonwebtoken';
import 'dotenv/config'

async function loginUsuario(req: Request, res: Response) {

    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findFirst({
        where: {
            email: email
        }
    })

    if (!usuario) {
        throw new Error('Usuário ou senha incorreta')
    }

    const senhaCorreta = await compare(senha, usuario.senha);

    if (!senhaCorreta) {
        throw new Error('Usuário ou senha incorreta')
    }

    const token = sign({
            nome: usuario.nome,
            email: usuario.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d',
            subject: usuario.id
        }
    )

    return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        token: token
    })
}

export default loginUsuario