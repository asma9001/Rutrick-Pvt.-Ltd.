"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Static Badge */}
          <Badge
            variant="secondary"
            className="mb-4 sm:mb-6 text-xs sm:text-sm font-medium"
          >
            AI • Marketing • Freelancing Hub
          </Badge>

          {/* Heading (no scroll animation, only typewriter) */}
          <h1 className="text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            <Typewriter
              words={["Smart Work. Lasting Impact."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          {/* Paragraph with scroll animation */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
          >
            Empowering businesses with cutting-edge AI solutions, strategic
            marketing, and a premium freelancing ecosystem.
          </motion.p>

          {/* Button with scroll animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <a href="#services">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
