"use client"

import type { Filter } from "../App"

interface FilterBarProps {
  currentFilter: Filter
  onFilterChange: (filter: Filter) => void
}

const FilterBar = ({ currentFilter, onFilterChange }: FilterBarProps) => {
  const filters: Filter[] = ["All", "Daily", "Weekly", "Monthly", "Yearly"]

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${currentFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
