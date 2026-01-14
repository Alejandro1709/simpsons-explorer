import type { ITab } from '../data/tabs'

interface Props {
  tab: ITab
  activeTab: string
  onTabChange: React.Dispatch<
    React.SetStateAction<'characters' | 'episodes' | 'locations'>
  >
}

function Tab({ tab, activeTab, onTabChange }: Props) {
  return (
    <button
      onClick={() => onTabChange(tab.id)}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        activeTab === tab.id
          ? 'bg-primary text-primary-foreground shadow-lg scale-105'
          : 'bg-card text-foreground border-2 border-border hover:border-primary'
      }`}
    >
      {tab.label}
    </button>
  )
}

export default Tab
