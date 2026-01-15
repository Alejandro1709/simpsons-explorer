import { locationApi } from '../api/location.api'
import type { LocationsResponse } from '../types/get-locations.response'

export const getLocationsByPage = async (
  page: number
): Promise<LocationsResponse> => {
  if (isNaN(page)) {
    page = 1
  }

  const { data } = await locationApi.get<LocationsResponse>('', {
    params: {
      page,
    },
  })

  return data
}
