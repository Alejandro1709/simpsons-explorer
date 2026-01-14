function CharacterFilters() {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-card-foreground">
        Advanced Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Search character..."
            className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Gender
          </label>
          <select className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Status
          </label>
          <select className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
            <option value="">All Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => {}}
        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default CharacterFilters
