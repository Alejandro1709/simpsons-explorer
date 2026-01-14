interface Props {
  filters: {
    season: string
  }
  onFilterChange: React.Dispatch<
    React.SetStateAction<{
      season: string
    }>
  >
}

function EpisodeFilters({ filters, onFilterChange }: Props) {
  const seasons = Array.from({ length: 35 }, (_, i) => i + 1)

  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-card-foreground">
        Advanced Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Season
          </label>
          <select
            value={filters.season}
            onChange={(e) =>
              onFilterChange({ ...filters, season: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="">All Seasons</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                Season {season}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={() => onFilterChange({ season: '' })}
        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default EpisodeFilters
