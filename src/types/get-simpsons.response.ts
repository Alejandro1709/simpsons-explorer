import type { Simpson } from './simpson.interface'

export interface SimpsonsResponse {
  count: number
  next: string
  pages: number
  prev: string | null
  results: Simpson[]
}
