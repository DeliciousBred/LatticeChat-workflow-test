import * as z from "zod";

export const MessagePacket = z.object({
  conversationId: z.string().nonempty(),
  senderId: z.string().nonempty(),
  content: z.string().nonempty(),
});
