import { ResponseVacancy } from '../api/types.ts'

export type Vacancy = SnakeToCamelCaseObject<ResponseVacancy>
