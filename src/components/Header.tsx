interface Props {
  title: string
  description: string
}

function Header({ title, description }: Props) {
  return (
    <header className="bg-linear-to-r from-primary to-secondary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-primary-foreground/80 mt-2">{description}</p>
      </div>
    </header>
  )
}

export default Header
