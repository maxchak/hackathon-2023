import { User } from '@/entities/user'

export interface ResponseSession {
  access_token: string
  expires_in: number
  user: User
}

export type Session = SnakeToCamelCaseObject<ResponseSession>
