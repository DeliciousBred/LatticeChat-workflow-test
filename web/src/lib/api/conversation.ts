import type { BasicUserInfo } from '#/lib/api/user.ts';

export type Conversation = {
  id: string,
  name: string,
  ownerId?: string,
  members: BasicUserInfo[]
}

export type Message = {
  id: string,
  senderId: string,
  conversationId: string,
  content: string,
  createdAt: Date,
}

export async function fetchConversation(conversationId: string): Promise<Conversation | null> {
  return null;
}

export async function fetchConversations(conversationIds: string[]): Promise<Conversation[]> {
  return [];
}

export async function fetchConversationMessages(conversationId: string): Promise<Message | null>{
  return null;
}
