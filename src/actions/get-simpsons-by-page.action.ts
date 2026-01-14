import { simpsonApi } from '../api/simpson.api'

export const getSimpsonsByPage = async () => {
  const { data } = await simpsonApi.get('')

  return data
}
