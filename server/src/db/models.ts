import { model } from "mongoose";
import { userSchema } from "./schemas/User";
import { conversationSchema, messageSchema } from "./schemas/Conversation";

export const User = model("User", userSchema);
export const Message = model("Message", messageSchema);
export const Conversation = model("Conversation", conversationSchema);
