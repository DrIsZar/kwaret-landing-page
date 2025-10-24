'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import MobileFilterDrawer from '@/components/MobileFilterDrawer'

interface SearchFilterProps {
  onSearchChange: (search: string) => void
  onCategoryChange: (categories: string[]) => void
  activeCategories: string[]
  searchQuery: string
  totalResults: number
}

const categories = [
  { id: 'popular', label: '🔥 Popular', value: '🔥 Popular' },
  { id: 'software', label: '💻 Software', value: 'Software' },
  { id: 'gaming', label: '🎮 Gaming', value: 'Gaming' },
  { id: 'streaming', label: '🎬 Streaming', value: 'streaming' },
  { id: 'internet', label: '📱 Internet & Mobile', value: 'Internet & Mobile' },
]

export default function SearchFilter({
  onSearchChange,
  onCategoryChange,
  activeCategories,
  searchQuery,
  totalResults,
}: SearchFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false)

  const handleCategoryToggle = (category: string) => {
    if (activeCategories.includes(category)) {
      onCategoryChange(activeCategories.filter((c) => c !== category))
    } else {
      onCategoryChange([...activeCategories, category])
    }
  }

  const clearAllFilters = () => {
    onSearchChange('')
    onCategoryChange([])
  }

  const hasActiveFilters = searchQuery || activeCategories.length > 0

  // Filter content component (reused in desktop and mobile)
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-k-white uppercase tracking-wide">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryToggle(category.value)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                activeCategories.includes(category.value)
                  ? 'bg-k-yellow text-k-black border-k-yellow font-semibold'
                  : 'bg-k-black/50 text-gray-300 border-k-gray hover:border-k-yellow/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full space-y-4">
      {/* Search Bar and Filter Toggle */}
      <div className="flex gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services (e.g., Spotify, Netflix, Adobe...)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-k-gray/50 border border-k-gray rounded-xl text-k-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-k-yellow focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-k-gray rounded-full transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button - Desktop shows dropdown, Mobile opens drawer */}
        <Button
          onClick={() => {
            if (window.innerWidth < 768) {
              setIsMobileDrawerOpen(true)
            } else {
              setIsFilterOpen(!isFilterOpen)
            }
          }}
          variant="outline"
          className={`px-4 py-3 h-auto border-k-gray hover:border-k-yellow transition-colors ${
            hasActiveFilters || isFilterOpen ? 'border-k-yellow bg-k-yellow/10' : ''
          }`}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 w-2 h-2 bg-k-yellow rounded-full"></span>
          )}
        </Button>
      </div>

      {/* Results Count and Active Filters */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="text-sm text-gray-400">
          Showing <span className="text-k-yellow font-semibold">{totalResults}</span> services
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-k-yellow hover:text-k-yellow/80 transition-colors flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear all filters
          </button>
        )}
      </div>

      {/* Active Filter Tags */}
      {(activeCategories.length > 0 || searchQuery) && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <div className="px-3 py-1 bg-k-yellow/20 border border-k-yellow/30 rounded-full text-sm text-k-yellow flex items-center gap-2">
              Search: &quot;{searchQuery}&quot;
              <button
                onClick={() => onSearchChange('')}
                className="hover:bg-k-yellow/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {activeCategories.map((cat) => (
            <div
              key={cat}
              className="px-3 py-1 bg-k-yellow/20 border border-k-yellow/30 rounded-full text-sm text-k-yellow flex items-center gap-2"
            >
              {categories.find((c) => c.value === cat)?.label || cat}
              <button
                onClick={() => handleCategoryToggle(cat)}
                className="hover:bg-k-yellow/20 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Desktop Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden hidden md:block"
          >
            <div className="p-6 bg-k-gray/30 border border-k-gray rounded-xl">
              <FilterContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onApply={() => {
          // Filters are already applied in real-time, just close drawer
        }}
      >
        <FilterContent />
      </MobileFilterDrawer>
    </div>
  )
}

