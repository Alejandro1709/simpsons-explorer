import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'
import type { Simpson } from '../types/simpson.interface'

interface FavoriteSimpsonContext {
  favorites: Simpson[]
  favoriteCount: number
  isFavorite: (simpson: Simpson) => boolean
  toggleFavorite: (simpson: Simpson) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteSimpsonContext = createContext<FavoriteSimpsonContext>(
  {} as FavoriteSimpsonContext
)

const getFavoritesFromLocalStorage = (): Simpson[] => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export const FavoriteSimpsonProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Simpson[]>(
    getFavoritesFromLocalStorage()
  )

  const toggleFavorite = (simpson: Simpson) => {
    const simpsonExist = favorites.find((s) => s.id === simpson.id)

    if (simpsonExist) {
      const newFavorites = favorites.filter((s) => s.id !== simpson.id)
      setFavorites(newFavorites)
      return
    }

    setFavorites([...favorites, simpson])
  }

  const isFavorite = (simpson: Simpson) => {
    return favorites.some((s) => s.id === simpson.id)
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoriteSimpsonContext
      value={{
        favorites,
        favoriteCount: favorites.length,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteSimpsonContext>
  )
}
