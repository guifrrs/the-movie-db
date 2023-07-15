import { Filter } from '@/types/Filter'
import { FILTERS_OPTIONS } from '@/utils'

import { FilterItem } from '../filter-item/filter-item'

interface FilterListProps {
  activeFilters: Filter[]
}

export function FilterList({ activeFilters }: FilterListProps) {
  const isActive = (filter: Filter): boolean => activeFilters.includes(filter)

  const getItemStyle = (filter: Filter) => {
    if (!isActive(filter)) {
      return 'bg-white text-black'
    }

    return 'bg-orange-400 text-white'
  }

  return (
    <ul className="flex gap-2 mt-2 flex-wrap max-w-screen-lg">
      {FILTERS_OPTIONS.map((filter) => (
        <li key={filter.value} className={`rounded text-sm px-4 py-1.5 font-bold ${getItemStyle(filter.value)}`}>
          <FilterItem filter={filter.value} label={filter.label} isActive={isActive(filter.value)} />
        </li>
      ))}
    </ul>
  )
}
