import TabSelector from '../components/TabSelector'
import CharactersView from '../components/views/CharactersView'

function IndexPage() {
  return (
    <>
      {/* TabSelector */}
      <TabSelector />
      {/* TabSelector */}

      <div className="mt-8">
        <CharactersView />
      </div>
    </>
  )
}

export default IndexPage
