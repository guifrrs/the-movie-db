interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
}
