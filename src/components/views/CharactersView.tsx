import CharacterFilters from '../filters/CharacterFilters'
import Loader from '../Loader'

function CharactersView() {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <CharacterFilters />
      {/* Filters */}

      {/* Loader */}
      <Loader />
      {/* Loader */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src="https://static.wikia.nocookie.net/simpsons/images/f/fd/Profile_-_Homer_Simpson.png/revision/latest/thumbnail/width/360/height/360?cb=20251116192439"
              alt="Homer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg text-card-foreground text-center">
              Homer Simpson
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">No characters found</p>
      </div>
    </div>
  )
}

export default CharactersView
