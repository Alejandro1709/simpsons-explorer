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
