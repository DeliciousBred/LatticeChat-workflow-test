import { Schema, Types } from "mongoose";

export const messageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  conversationId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  content: { type: String, required: true, minLength: 1 },
});

export const conversationSchema = new Schema({
  content: { type: String, required: true },
  members: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    validate: {
      // Ensure conversations always have atleast two members
      validator: (v: Types.ObjectId[]) => {
        return v && v.length >= 2;
      },
      message: "A conversation must have at least two members",
    },
  },
});
