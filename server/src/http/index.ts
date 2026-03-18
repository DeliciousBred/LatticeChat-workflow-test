import { toNodeHandler } from "better-auth/node";
import { Router } from "express";
import auth from "../util/auth.js";
import { handleLog } from "./middleware/loggerMiddleware.js";

const apiRouter = Router();

apiRouter.use(handleLog);
apiRouter.all("/auth/*", toNodeHandler(auth));

export default apiRouter;

