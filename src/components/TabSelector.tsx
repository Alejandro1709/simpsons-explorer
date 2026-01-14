import tabs from '../data/tabs'
import Tab from './Tab'

interface Props {
  activeTab: string
  onTabChange: (tab: string) => void
}

function TabSelector({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      ))}
    </div>
  )
}

export default TabSelector
