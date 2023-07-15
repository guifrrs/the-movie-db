'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { CloseIcon } from '@/components/close-icon'

interface FilterItemProps {
  label: string
  filter: string
  isActive: boolean
}

export function FilterItem({ label, filter, isActive }: FilterItemProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  const onFilterClick = () => {
    const currentFilters = searchParams.getAll('genre')

    const nextFilters = isActive
      ? currentFilters.filter((activeFilter) => activeFilter !== filter)
      : [...currentFilters, filter]

    const genreFilter = nextFilters.length ? `genre=${nextFilters.join('&genre=')}` : ''
    const nextURL = `${pathName}?${genreFilter}`

    return router.push(nextURL)
  }

  return (
    <button className="flex gap-1" onClick={onFilterClick}>
      {label}
      {isActive && <CloseIcon />}
    </button>
  )
}
