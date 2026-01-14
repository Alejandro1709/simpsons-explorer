import { useSearchParams } from 'react-router'

interface Props {
  totalPages: number
}

function Pagination({ totalPages }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'

  const page = isNaN(+queryPage) ? 1 : +queryPage

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return

    searchParams.set('page', page.toString())

    setSearchParams(searchParams)
  }

  return (
    <div className="flex flex-row justify-center items-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg border-2 border-border bg-card text-card-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-all"
      >
        ← Previous
      </button>

      <div className="flex flex-row gap-2">
        {page} / {totalPages}
      </div>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg border-2 border-border bg-card text-card-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-all"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination
