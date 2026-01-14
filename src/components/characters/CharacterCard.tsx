import { useNavigate } from 'react-router'
import type { Simpson } from '../../types/simpson.interface'

interface Props {
  character: Simpson
}

function CharacterCard({ character }: Props) {
  const statusColor =
    {
      Alive: 'bg-green-100 text-green-800',
      Dead: 'bg-red-100 text-red-800',
      unknown: 'bg-gray-100 text-gray-800',
    }[character.status] || 'bg-gray-100 text-gray-800'

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/characters/${character.id}`)
  }

  return (
    <div
      className="bg-card rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground truncate">
          {character.name}
        </h3>

        <div className="flex gap-2 mt-3 flex-wrap">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${statusColor}`}
          >
            {character.status}
          </span>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">
            Human
          </span>
        </div>

        <p className="text-sm text-muted-foreground mt-3">{character.gender}</p>
      </div>
    </div>
  )
}

export default CharacterCard
