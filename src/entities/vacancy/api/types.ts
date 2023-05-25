import { City } from '@/entities/city'

export interface ResponseVacancy {
  id: Id
  title: string
  candidate_responsibilities: string
  work_conditions: string
  id_city: Id
  salary_from: number
  salary_to: number
  candidate_requirements: string
  comment: string
  city: City
}

export interface RequestVacancy {
  title: string
  id_city: number
  salary_from: number
  salary_to: number
  candidate_responsibilities: string
  candidate_requirements: string
  work_conditions: string
  comment: string
}
