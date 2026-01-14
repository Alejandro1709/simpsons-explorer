import { useState } from 'react'
import TabSelector from '../components/TabSelector'
import CharactersView from '../components/views/CharactersView'
import { getSimpsonsByPage } from '../actions/get-simpsons-by-page.action'
import { useQuery } from '@tanstack/react-query'

function IndexPage() {
  const [activeTab, setActiveTab] = useState<
    'characters' | 'episodes' | 'locations'
  >('characters')

  const { data } = useQuery({
    queryKey: ['simpsons'],
    queryFn: getSimpsonsByPage,
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      {/* TabSelector */}
      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
      {/* TabSelector */}

      <div className="mt-8">
        {activeTab === 'characters' && <CharactersView />}
      </div>
    </>
  )
}

export default IndexPage
