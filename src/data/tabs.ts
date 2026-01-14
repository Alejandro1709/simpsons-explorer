export interface ITab {
  id: string
  label: string
  icon: string
}

const tabs: ITab[] = [
  { id: 'characters', label: '👥 Characters', icon: '👥' },
  { id: 'episodes', label: '📺 Episodes', icon: '📺' },
  { id: 'locations', label: '📍 Locations', icon: '📍' },
  { id: 'favorites', label: '⭐️ Favorites', icon: '⭐️' },
]

export default tabs
