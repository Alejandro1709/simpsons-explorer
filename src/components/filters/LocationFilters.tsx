interface Props {
  filters: {
    search: string
  }
  onFiltersChange: React.Dispatch<
    React.SetStateAction<{
      search: string
    }>
  >
}

function LocationFilters({ filters, onFiltersChange }: Props) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-card-foreground">
        Advanced Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Search Location
          </label>
          <input
            name="search"
            type="text"
            placeholder="Search location..."
            value={filters.search}
            onChange={(e) =>
              onFiltersChange({ ...filters, search: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        onClick={() => onFiltersChange({ search: '' })}
        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default LocationFilters
