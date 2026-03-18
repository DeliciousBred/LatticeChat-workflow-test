import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { bearer } from "better-auth/plugins";
import { ENV } from "./env";
import mongoose from "mongoose";
import type { Db } from "mongodb";

const baseURL = ENV.HOST + ":" + ENV.PORT;

const auth = betterAuth({
  plugins: [bearer()],
  baseURL,
  database: mongodbAdapter(mongoose.connection as unknown as Db),
  emailAndPassword: { enabled: true },
  user: {
    modelName: "users",
    fields: {
      name: "username"
    }
  }
});

export default auth;
