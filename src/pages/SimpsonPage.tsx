import { useNavigate, useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getSimpson } from '../actions/get-simpson.action'
import Loader from '../components/Loader'

function SimpsonPage() {
  const { id = '' } = useParams()

  const navigate = useNavigate()

  const { data: simpson, isLoading } = useQuery({
    queryKey: ['simpson', id],
    queryFn: () => getSimpson(+id),
  })

  return (
    <>
      {isLoading && <Loader />}

      {simpson ? (
        <div className="space-y-4">
          <header className="flex flex-row justify-between items-center p-4 rounded-md bg-linear-to-r from-primary to-secondary text-primary-foreground shadow-lg">
            <button
              className="px-3 py-2 rounded-lg font-semibold transition-all duration-200 bg-card text-foreground border-2 border-border hover:border-primary cursor-pointer"
              onClick={() => navigate('/')}
            >
              Back
            </button>

            <h2 className="text-3xl font-medium">{simpson.name}</h2>

            <button className="px-3 py-2 rounded-lg font-semibold transition-all duration-200 bg-card text-foreground border-2 border-border hover:border-primary cursor-pointer">
              Fav
            </button>
          </header>

          <div className="space-y-4">
            <div className="relative h-102.5 overflow-hidden bg-muted rounded-lg">
              <img
                src={`https://cdn.thesimpsonsapi.com/1280${simpson.portrait_path}`}
                alt={simpson.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-4xl font-medium">{simpson.name}</h2>

            <div className="flex gap-2 mt-3 flex-wrap">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded bg-green-400`}
              >
                Status: {simpson.status}
              </span>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">
                {simpson.occupation}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-linear-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
          <div className="text-center">
            <p className="text-muted-foreground">Character not found</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SimpsonPage
