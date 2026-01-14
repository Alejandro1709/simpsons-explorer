import Header from './components/Header'
import TabSelector from './components/TabSelector'
import CharactersView from './components/views/CharactersView'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/10">
      {/* Header */}
      <Header
        title="🎬 Simpsons Explorer"
        description="Discover characters, episodes and locations from your favorite show"
      />
      {/* Header */}

      <div className="container mx-auto px-4 py-8">
        {/* TabSelector */}
        <TabSelector />
        {/* TabSelector */}

        <div className="mt-8">
          <CharactersView />
        </div>
      </div>
    </div>
  )
}

export default App
