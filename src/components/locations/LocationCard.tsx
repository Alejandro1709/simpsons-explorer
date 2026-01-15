import type { ILocation } from '../../types/location.interface'

interface Props {
  location: ILocation
}

function LocationCard({ location }: Props) {
  return (
    <div
      className="bg-card rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => {}}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
          alt={location.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground truncate">
          {location.name}
        </h3>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded bg-red-400`}
          >
            Town: {location.town}
          </span>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">
            Type: {location.use}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
