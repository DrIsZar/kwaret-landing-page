'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import SocialModal from '@/components/SocialModal'
import { socials } from '@/lib/socials'

const faqs = [
  {
    question: "How does the warranty work?",
    answer: "All our services come with a full warranty. If your account gets suspended, banned, or stops working for any reason, we'll replace it for free within the warranty period. Just contact us on Messenger and we'll resolve it as soon as possible."
  },
  {
    question: "When do I receive access after payment?",
    answer: "Most accounts are activated within 5-15 minutes after payment confirmation. For some services, it may take up to 24 hours. We'll send you the login details via Messenger as soon as your account is ready."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept multiple payment methods with different fees: Ooredoo (17% fees), D17 (1% fees), PayPal (0% fees), and Crypto (network fees apply). Each payment method has fees that are added to your total. For example, if you buy something for 10 dinars with a 10% fee method, your total will be 11 dinars. Contact us on Messenger to discuss the best payment option for you."
  },
  {
    question: "How do gaming credits work?",
    answer: "Gaming credits like Robux and PlayStation cards are delivered shortly after payment. You'll receive the codes via Messenger that you can redeem directly in your gaming platform. All codes are guaranteed to work."
  },
  {
    question: "What about internet plans and solde?",
    answer: "Our Ooredoo internet plans are activated shortly after payment. For solde (credit), you get a rate of 0.86 (e.g., 10 TND credit costs 8.6 TND). All plans come with warranty and quick activation."
  },
  {
    question: "Are software licenses legitimate?",
    answer: "Yes, all our software licenses (Windows, Canva Pro) are legitimate and come with lifetime validity. Windows keys are retail licenses, and Canva Pro subscriptions are full-year access with all premium features."
  },
  {
    question: "What if I need help with my account?",
    answer: "Whether you need help setting up your account, have questions about features, or encounter any issues, just message us and we'll help you."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer refunds within 24 hours if the service doesn't work as expected and we can't resolve the issue. However, our warranty system ensures that most issues are resolved by providing replacement accounts rather than refunds."
  }
]

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <section className="py-24 bg-k-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-k-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Got questions? We&apos;ve got answers. If you don&apos;t see your question here, 
              feel free to ask us directly on Messenger.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-k-gray rounded-lg px-6 bg-k-black/50"
                >
                  <AccordionTrigger className="text-left text-k-white hover:text-k-yellow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-gray-300 text-lg">
              Still have questions? We&apos;re here to help!
            </p>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              Get in Touch
            </Button>
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
