import { Request, Response } from 'express';
import prisma from '../../prisma';

async function detalhesUsuario(req: Request, res: Response) {
    
    const usuario = await prisma.usuario.findFirst({
        where: {
            id: req.token,
        },
        select: {
            nome: true,
            email: true,
            id: true
        }
    })

    res.json(usuario)
}

export default detalhesUsuario