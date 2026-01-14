import type { SetURLSearchParams } from 'react-router'
import type { ITab } from '../data/tabs'

interface Props {
  tab: ITab
  activeTab: string
  onTabChange: SetURLSearchParams
}

function Tab({ tab, activeTab, onTabChange }: Props) {
  return (
    <button
      onClick={() =>
        onTabChange((prev) => {
          prev.set('tab', tab.id)
          return prev
        })
      }
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
