const tabs = [
  { id: 'characters', label: '👥 Characters', icon: '👥' },
  { id: 'episodes', label: '📺 Episodes', icon: '📺' },
  { id: 'locations', label: '📍 Locations', icon: '📍' },
]

function TabSelector() {
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {}}
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-card text-foreground border-2 border-border hover:border-primary cursor-pointer"
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabSelector
