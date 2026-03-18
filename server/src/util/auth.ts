import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { bearer, emailOTP } from "better-auth/plugins";
import { ENV } from "./env";
import mongoose from "mongoose";
import { sendDuplicateEmailNotification, sendEmailVerificationOTP, sendForgetPasswordOTP } from "./mailer.js";
import { connectMongoDB } from "../db";

await connectMongoDB();
const client = mongoose.connection.getClient();
const db = client.db();

const baseURL = "http://" + ENV.HOST + ":" + ENV.PORT;

const auth = betterAuth({
  plugins: [
    bearer(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          await sendEmailVerificationOTP(email, otp);
        } else if (type === "forget-password") {
          await sendForgetPasswordOTP(email, otp);
        }
      },
    })
  ],
  baseURL,
  database: mongodbAdapter(db, {client}),
  emailAndPassword: {
    enabled: true,
    onExistingUserSignUp: async ({user}, request) => {
      if (user.emailVerified) {
        await sendDuplicateEmailNotification(user.email)
      }
    }
  },
  user: {
    modelName: "users",
    fields: {
      name: "username"
    }
  }
});

export default auth;
