import auth from '../util/auth';
import { toNodeHandler } from 'better-auth/node';
import { Router } from 'express';
import userRouter from './routes/userRouter';
import conversationRouter from './routes/conversationRouter';

const apiRouter = Router();

apiRouter.all('/auth/*any', toNodeHandler(auth));
apiRouter.use('/users/:user_id', userRouter);
apiRouter.use('/conversations/:conversation_id', conversationRouter);

export default apiRouter;
