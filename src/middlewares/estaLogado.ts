import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface jwtSub {
    sub: string
}

function estaLogado(req: Request, res: Response, next: NextFunction) {

    const [b, token] = req.headers.authorization.split(' ')
    
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET,
        ) as jwtSub

        req.token = sub

        next()
    } catch (error) {
        throw new Error(error)
    }
}

export default estaLogado