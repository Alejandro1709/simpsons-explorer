import { simpsonApi } from '../api/simpson.api'
import type { SimpsonsResponse } from '../types/get-simpsons.response'

export const getSimpsonsByPage = async (): Promise<SimpsonsResponse> => {
  const { data } = await simpsonApi.get<SimpsonsResponse>('')

  return data
}
