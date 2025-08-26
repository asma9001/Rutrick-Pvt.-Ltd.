"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // triggers only once when 30% in view
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            We are a forward-thinking technology company specializing in artificial intelligence, strategic marketing
            solutions, and premium freelancing services. Our mission is to bridge the gap between innovative technology
            and practical business applications, delivering solutions that create lasting impact for our clients.
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            With a team of experts in AI development, digital marketing, and project management, we provide
            comprehensive solutions that drive growth and efficiency for businesses of all sizes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
