'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Container from '@/components/Container'
import PricingCard from '@/components/PricingCard'
import GradientIllustrations from '@/components/GradientIllustrations'
import SocialModal from '@/components/SocialModal'
import SearchFilter from '@/components/SearchFilter'
import { plans } from '@/lib/pricing'
import { filterPlans } from '@/lib/filterUtils'

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  
  const handleContactClick = () => {
    setIsModalOpen(true)
  }

  // Apply filters
  const filteredPlans = useMemo(() => {
    return filterPlans(plans, {
      searchQuery,
      categories: activeCategories,
    })
  }, [searchQuery, activeCategories])

  // Group filtered plans by category
  const groupedPlans = useMemo(() => {
    const groups: Record<string, typeof plans> = {
      popular: [],
      software: [],
      gaming: [],
      streaming: [],
      internet: [],
    }

    filteredPlans.forEach((plan) => {
      if (plan.tag === '🔥 Popular') {
        groups.popular.push(plan)
      } else if (plan.tag === 'Software') {
        groups.software.push(plan)
      } else if (plan.tag === 'Gaming') {
        groups.gaming.push(plan)
      } else if (plan.tag === 'Music Streaming' || plan.tag === 'Video Streaming') {
        groups.streaming.push(plan)
      } else if (plan.tag === 'Internet & Mobile') {
        groups.internet.push(plan)
      }
    })

    return groups
  }, [filteredPlans])

  return (
    <section className="py-16 sm:py-24 bg-k-black relative overflow-hidden">
      <GradientIllustrations variant="section" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-k-white">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              From premium subscriptions to gaming credits, internet plans, and software licenses. 
              All services come with warranty and 24/7 support.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto">
            <SearchFilter
              onSearchChange={setSearchQuery}
              onCategoryChange={setActiveCategories}
              activeCategories={activeCategories}
              searchQuery={searchQuery}
              totalResults={filteredPlans.length}
            />
          </div>

          {/* Filtered Results */}
          {filteredPlans.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 space-y-4"
            >
              <div className="text-6xl">😕</div>
              <h3 className="text-2xl font-bold text-k-white">No services found</h3>
              <p className="text-gray-400">
                Try adjusting your filters or search query
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategories([])
                }}
                variant="outline"
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-12 sm:space-y-16">
              {/* Show grouped results only if no search query is applied */}
              {searchQuery === '' ? (
                <>
                  {/* Popular Services */}
                  {(groupedPlans.popular.length > 0 || groupedPlans.streaming.length > 0) && (
                    <div className="space-y-6 sm:space-y-8">
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-k-yellow mb-2">
                          🔥 Premium Subscriptions
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">Popular streaming and productivity services</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {[...groupedPlans.popular, ...groupedPlans.streaming].map((plan, index) => (
                          <motion.div
                            key={plan.product}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
                          >
                            <PricingCard plan={plan} index={index} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Software & Licenses */}
                  {groupedPlans.software.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-k-yellow mb-2">
                          💻 Software & Licenses
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">Professional software and design tools</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {groupedPlans.software.map((plan, index) => (
                          <motion.div
                            key={plan.product}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
                          >
                            <PricingCard plan={plan} index={index} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Gaming Credits */}
                  {groupedPlans.gaming.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-k-yellow mb-2">
                          🎮 Gaming Credits
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">Robux, PlayStation cards, and gaming currencies</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {groupedPlans.gaming.map((plan, index) => (
                          <motion.div
                            key={plan.product}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
                          >
                            <PricingCard plan={plan} index={index} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Internet & Mobile */}
                  {groupedPlans.internet.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-k-yellow mb-2">
                          📱 Internet & Mobile
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">Data plans and mobile services</p>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {groupedPlans.internet.map((plan, index) => (
                          <motion.div
                            key={plan.product}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
                          >
                            <PricingCard plan={plan} index={index} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Show flat list when searching */
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {filteredPlans.map((plan, index) => (
                    <motion.div
                      key={plan.product}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] max-w-sm"
                    >
                      <PricingCard plan={plan} index={index} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-k-yellow/20 bg-gradient-to-b from-k-black/60 to-k-black/80 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
              <div className="text-center space-y-5">
                <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
                  Don&apos;t see what you&apos;re looking for? <span className="text-k-yellow">We have many more services available.</span>
                </p>
                <div className="flex justify-center">
                  <Button
                    size="xl"
                    onClick={handleContactClick}
                    className="w-full sm:w-auto"
                    aria-label="Get in touch"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Social Modal */}
      <SocialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
