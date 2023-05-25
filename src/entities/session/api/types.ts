export interface RequestLoginBody {
  email: string
  password: string
}

export interface RequestSignupBody {
  company_name: string
  first_name: string
  last_name: string
  email: Email
  password: string
}

export type SignupBody = SnakeToCamelCaseObject<RequestSignupBody>
