import { SectionContent } from './section-content'
import { SectionTitle } from './section-title'

interface SectionProps {
  children: React.ReactNode
}

export function Section({ children }: SectionProps) {
  return <section>{children}</section>
}

Section.Title = SectionTitle
Section.Content = SectionContent
