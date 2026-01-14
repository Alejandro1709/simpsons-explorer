import { useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import TabSelector from '../components/TabSelector'
import CharactersView from '../components/views/CharactersView'
import { getSimpsonsByPage } from '../actions/get-simpsons-by-page.action'
import { useMemo } from 'react'

function IndexPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const activeTab = searchParams.get('tab') || 'characters'

  const selectedTab = useMemo(() => {
    const validTabs = ['characters', 'episodes', 'locations']
    return validTabs.includes(activeTab) ? activeTab : 'characters'
  }, [activeTab])

  const { data: simpsonsResponse, isLoading } = useQuery({
    queryKey: ['simpsons'],
    queryFn: getSimpsonsByPage,
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
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  )
}

export default IndexPage
