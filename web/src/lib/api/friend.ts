import type { BasicUserInfo } from '#/lib/api/user.ts';

export type FriendRequest = {
  from: BasicUserInfo,
  to: BasicUserInfo,
}

export async function fetchFriendRequests(): Promise<FriendRequest[]> {
  return [];
}

export async function sendFriendRequest(userId: string) {}

export async function removeFriendRequest(userId: string) {}

export async function removeFriend(userId: string) {}

export async function fetchFriends(friendIds: string[]): Promise<BasicUserInfo[]> {
  return [];
}
