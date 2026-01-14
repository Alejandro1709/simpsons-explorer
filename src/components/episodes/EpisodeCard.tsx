import type { Episode } from '../../types/episode.interface'

interface Props {
  episode: Episode
}

function EpisodeCard({ episode }: Props) {
  return (
    <div
      className="bg-card rounded-lg overflow-hidden border-2 border-border h-fit hover:border-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => {}}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
          alt={episode.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground truncate">
          {episode.name}
        </h3>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded bg-red-400`}
          >
            Date: {episode.airdate}
          </span>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">
            Episode: {episode.episode_number}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mt-3">{episode.synopsis}</p>
      </div>
    </div>
  )
}

export default EpisodeCard
