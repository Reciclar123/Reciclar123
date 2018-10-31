export interface Credentials {
    email?: string;
    username?: string;
    password: string;
}

export interface ResponseUser {
  id: string;
  ttl: number;
  created: string;
  userId: string;
}
