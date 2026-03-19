import { Model } from "mongoose";
import { userSchema } from "./schemas/User";
import { conversationSchema, messageSchema } from "./schemas/Conversation";

export const User = new Model("User", userSchema);
export const Message = new Model("Message", messageSchema);
export const Conversation = new Model("Conversation", conversationSchema);
