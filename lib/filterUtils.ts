import { Plan } from './pricing'

export interface FilterOptions {
  searchQuery: string
  categories: string[]
}

// Check if plan matches search query
export function matchesSearch(plan: Plan, query: string): boolean {
  if (!query) return true
  
  const searchLower = query.toLowerCase()
  const productLower = plan.product.toLowerCase()
  const tagLower = plan.tag.toLowerCase()
  const bulletsLower = plan.bullets.join(' ').toLowerCase()
  
  return (
    productLower.includes(searchLower) ||
    tagLower.includes(searchLower) ||
    bulletsLower.includes(searchLower)
  )
}

// Check if plan matches category filters
export function matchesCategories(plan: Plan, categories: string[]): boolean {
  if (categories.length === 0) return true
  
  // Check if plan's tag matches any selected category
  return categories.some(category => {
    // Handle special case for "streaming" which includes multiple tags
    if (category === 'streaming') {
      return plan.tag === 'Music Streaming' || plan.tag === 'Video Streaming'
    }
    return plan.tag === category
  })
}

// Filter plans based on all criteria
export function filterPlans(plans: Plan[], filters: FilterOptions): Plan[] {
  return plans.filter(plan => {
    // Skip out of stock items if they don't match search
    if (plan.outOfStock && filters.searchQuery && !matchesSearch(plan, filters.searchQuery)) {
      return false
    }
    
    return (
      matchesSearch(plan, filters.searchQuery) &&
      matchesCategories(plan, filters.categories)
    )
  })
}

