import { episodeApi } from '../api/episode.api'
import type { EpisodesResponse } from '../types/get-episodes.response'

export const getEpisodesByPage = async (
  page: number
): Promise<EpisodesResponse> => {
  if (isNaN(page)) {
    page = 1
  }

  const { data } = await episodeApi.get<EpisodesResponse>('', {
    params: {
      page,
    },
  })

  return data
}
