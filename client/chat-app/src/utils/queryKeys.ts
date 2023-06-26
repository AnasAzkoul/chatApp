export const userKeys = {
  user: ['user'] as const,
  withUserId: (id: string) => [...userKeys.user, id]
}
