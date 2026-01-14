import { useState } from 'react'
import TabSelector from '../components/TabSelector'
import CharactersView from '../components/views/CharactersView'

function IndexPage() {
  const [activeTab, setActiveTab] = useState<string>('characters')

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
