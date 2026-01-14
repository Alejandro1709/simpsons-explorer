import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">404 Not Found</h1>
        <p>This page does not exists</p>
      </div>

      <Link
        className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-card text-foreground border-2 border-border hover:border-primary cursor-pointer"
        to="/"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFoundPage
