import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import TabSelector from '../components/TabSelector'
import CharactersView from '../components/views/CharactersView'
import { getSimpsonsByPage } from '../actions/get-simpsons-by-page.action'
import EpisodesView from '../components/views/EpisodesView'
import { getEpisodesByPage } from '../actions/get-episodes-by-page.action'

function IndexPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const activeTab = searchParams.get('tab') || 'characters'
  const page = searchParams.get('page') ?? '1'

  const selectedTab = useMemo(() => {
    const validTabs = ['characters', 'episodes', 'locations']
    return validTabs.includes(activeTab) ? activeTab : 'characters'
  }, [activeTab])

  const { data: simpsonsResponse, isLoading: simpsonsLoading } = useQuery({
    queryKey: ['simpsons', { page }],
    queryFn: () => getSimpsonsByPage(+page),
    staleTime: 1000 * 60 * 5,
  })

  const { data: episodesResponse, isLoading: episodesLoading } = useQuery({
    queryKey: ['episodes', { page }],
    queryFn: () => getEpisodesByPage(+page),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      {/* TabSelector */}
      <TabSelector activeTab={selectedTab} onTabChange={setSearchParams} />
      {/* TabSelector */}

      <div className="mt-8">
        {activeTab === 'characters' && (
          <CharactersView
            characters={simpsonsResponse?.results || []}
            isLoading={simpsonsLoading}
            totalPages={simpsonsResponse?.count || 1}
          />
        )}
        {activeTab === 'episodes' && (
          <EpisodesView
            episodes={episodesResponse?.results || []}
            isLoading={episodesLoading}
            totalPages={episodesResponse?.count || 1}
          />
        )}
      </div>
    </>
  )
}

export default IndexPage
