import { Outlet } from 'react-router'
import Header from '../components/Header'

function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/10">
      {/* Header */}
      <Header
        title="🎬 Simpsons Explorer"
        description="Discover characters, episodes and locations from your favorite show"
      />
      {/* Header */}

      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
