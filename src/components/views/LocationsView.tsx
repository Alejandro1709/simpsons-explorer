import { useMemo, useState } from 'react'
import type { ILocation } from '../../types/location.interface'
import Loader from '../Loader'
import LocationCard from '../locations/LocationCard'
import Pagination from '../Pagination'
import LocationFilters from '../filters/LocationFilters'

interface Props {
  locations: ILocation[]
  isLoading: boolean
  totalPages: number
}

function LocationsView({ locations, isLoading, totalPages }: Props) {
  const [filters, setFilters] = useState({
    search: '',
  })

  const filteredLocations = useMemo(() => {
    return locations.filter((l) => {
      const matchesName = l.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())

      return matchesName
    })
  }, [locations, filters])

  return (
    <div className="space-y-6">
      {/* Filters */}
      <LocationFilters filters={filters} onFiltersChange={setFilters} />
      {/* Filters */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Loader */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No locations found</p>
          </div>
        )}

        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default LocationsView
