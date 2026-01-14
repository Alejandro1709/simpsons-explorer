import type { ITab } from '../data/tabs'

interface Props {
  tab: ITab
}

function Tab({ tab }: Props) {
  return (
    <button
      onClick={() => {}}
      className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-card text-foreground border-2 border-border hover:border-primary cursor-pointer"
    >
      {tab.label}
    </button>
  )
}

export default Tab
