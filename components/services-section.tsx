"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, Palette, Search, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Freelancing Hub",
      description: "Connect with top-tier freelancers for your projects. Quality work, delivered on time.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning Projects",
      description: "Custom AI solutions tailored to your business needs. From data analysis to predictive modeling.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Boost your online presence with strategic social media campaigns that drive engagement.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic with our proven SEO strategies.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that communicate your brand message effectively across all platforms.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Client Communication",
      description: "Streamlined communication solutions to keep your projects on track and clients satisfied.",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="mt-3 sm:mt-4 p-0 h-auto text-primary hover:text-primary/80 text-sm sm:text-base"
                  >
                    Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
