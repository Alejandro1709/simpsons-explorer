import tabs from '../data/tabs'
import Tab from './Tab'

function TabSelector() {
  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <Tab key={tab.id} tab={tab} />
      ))}
    </div>
  )
}

export default TabSelector
