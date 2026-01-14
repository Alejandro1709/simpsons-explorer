import { simpsonApi } from '../api/simpson.api'
import type { SimpsonsResponse } from '../types/get-simpsons.response'

export const getSimpsonsByPage = async (
  page: number
): Promise<SimpsonsResponse> => {
  if (isNaN(page)) {
    page = 1
  }

  const { data } = await simpsonApi.get<SimpsonsResponse>('', {
    params: {
      page,
    },
  })

  return data
}
