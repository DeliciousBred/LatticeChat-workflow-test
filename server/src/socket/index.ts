import type { Server as HttpServer } from "node:http";
import { Server as IOServer } from "socket.io";
import { PingPacket } from "./packets/serverbound/PingPacket";
import { handlePing } from "./services/pingServices";
import { ENV } from "../util/env";

const createIO = (server: HttpServer) => {
  const io = new IOServer(server, {
    cors: {
      origin: ENV.ALLOW_ORIGIN,
    },
  });

  io.on("connection", (socket) => {
    socket.on("ping", (packet: PingPacket) => handlePing(socket, packet));

    console.log("Client connected!");
  });

  return io;
};

export { createIO };
