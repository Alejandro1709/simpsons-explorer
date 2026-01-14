import type { Simpson } from '../../types/simpson.interface'
import CharacterCard from '../characters/CharacterCard'

interface Props {
  characters: Simpson[]
}

function FavoritesView({ characters }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No favorites yet</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesView
