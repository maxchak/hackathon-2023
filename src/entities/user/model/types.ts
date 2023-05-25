export interface UserSnakeKeys {
  id: Id
  email: Email
  id_role: Id
  first_name: string
  last_name: string
}

export type User = SnakeToCamelCaseObject<UserSnakeKeys>
