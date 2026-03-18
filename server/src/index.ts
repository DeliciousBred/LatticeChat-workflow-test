import express from "express";
import http from "http";
import { createIO } from "./socket/index.js";
import apiRouter from "./http/index.js";
import { ENV } from "./util/env.js";
import { connectMongoDB } from "./db/index.js";
import "dotenv/config";

const app = express();
const server = http.createServer(app);
const io = createIO(server);

app.use(express.json());
app.use("/api", apiRouter);

connectMongoDB();

server.listen(ENV.PORT, () => {
  console.log("Lattice backend now listening");
  console.log("Hello Andrew :)");
});
