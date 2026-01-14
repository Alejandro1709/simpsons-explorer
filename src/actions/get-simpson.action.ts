import { simpsonApi } from '../api/simpson.api'
import type { Simpson } from '../types/simpson.interface'

export const getSimpson = async (id: number): Promise<Simpson> => {
  const { data } = await simpsonApi.get<Simpson>(`/${id}`)

  return data
}
