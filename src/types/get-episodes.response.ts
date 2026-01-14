import type { Episode } from './episode.interface'

export interface EpisodesResponse {
  count: number
  next: string
  pages: number
  prev: string | null
  results: Episode[]
}
