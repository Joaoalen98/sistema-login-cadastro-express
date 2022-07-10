import express, {NextFunction, Request, Response} from 'express';
import 'express-async-errors';
import cors from 'cors';

import usuarioRouter from './routes/usuario';

const app = express();

app.use(express.json())
app.use(cors())
app.use(usuarioRouter)

// tratamento de respostas com erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})



export default app