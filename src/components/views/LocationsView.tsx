import type { ILocation } from '../../types/location.interface'
import Loader from '../Loader'
import LocationCard from '../locations/LocationCard'
import Pagination from '../Pagination'

interface Props {
  locations: ILocation[]
  isLoading: boolean
  totalPages: number
}

function LocationsView({ locations, isLoading, totalPages }: Props) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      {/* <EpisodeFilters filters={filters} onFilterChange={setFilters} /> */}
      {/* Filters */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Loader */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {locations.length > 0 ? (
          locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No episodes found</p>
          </div>
        )}

        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}

export default LocationsView
