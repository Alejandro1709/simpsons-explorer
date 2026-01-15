import { useMemo, useState } from 'react'
import CharacterCard from '../characters/CharacterCard'
import CharacterFilters from '../filters/CharacterFilters'
import Loader from '../Loader'
import Pagination from '../Pagination'
import type { Simpson } from '../../types/simpson.interface'

interface Props {
  characters: Simpson[]
  isLoading: boolean
  totalPages: number
}

function CharactersView({ characters, isLoading, totalPages }: Props) {
  const [filters, setFilters] = useState({
    name: '',
    gender: '',
    status: '',
  })

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) => {
      const matchesName = c.name
        .toLowerCase()
        .includes(filters.name.toLowerCase())

      const matchesGender = !filters.gender || c.gender === filters.gender

      const matchesStatus = !filters.status || c.status === filters.status

      return matchesName && matchesGender && matchesStatus
    })
  }, [characters, filters])

  return (
    <div className="space-y-6">
      {/* Filters */}
      <CharacterFilters filters={filters} onFiltersChange={setFilters} />
      {/* Filters */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Loader */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No characters found</p>
          </div>
        )}

        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default CharactersView
