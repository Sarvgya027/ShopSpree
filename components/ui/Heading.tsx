
interface HeadingProps {
  title: string
  description?: string
}

export const Heading = ({title, description}: HeadingProps) => {
  return (
    <div>
      <h1 className="text-2xl tracking-tight font-bold">{title}</h1>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}