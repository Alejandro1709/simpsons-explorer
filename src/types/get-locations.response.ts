import type { ILocation } from './location.interface'

export interface LocationsResponse {
  count: number
  next: string
  pages: number
  prev: string | null
  results: ILocation[]
}
