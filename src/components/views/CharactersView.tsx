import type { Simpson } from '../../types/simpson.interface'
import CharacterCard from '../characters/CharacterCard'
import CharacterFilters from '../filters/CharacterFilters'
import Loader from '../Loader'

interface Props {
  characters: Simpson[]
  isLoading: boolean
}

function CharactersView({ characters, isLoading }: Props) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <CharacterFilters />
      {/* Filters */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Loader */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No characters found</p>
      </div>
    </div>
  )
}

export default CharactersView
