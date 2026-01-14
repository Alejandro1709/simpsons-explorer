import type { Episode } from '../../types/episode.interface'
import EpisodeCard from '../episodes/EpisodeCard'
import Loader from '../Loader'
import Pagination from '../Pagination'

interface Props {
  episodes: Episode[]
  isLoading: boolean
  totalPages: number
}

function EpisodesView({ episodes, isLoading, totalPages }: Props) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      Filters
      {/* Filters */}
      {/* Loader */}
      {isLoading && <Loader />}
      {/* Loader */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
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

export default EpisodesView
