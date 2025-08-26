"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Rutrick Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-bold text-foreground">Rutrick Pvt. Ltd.</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>

          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact"> <Button className="hidden lg:inline-flex">Contact</Button></a>

            <Button variant="ghost" size="sm" className="lg:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
  <div className="lg:hidden mt-4 pb-4 border-t border-border">
    <div className="flex flex-col space-y-4 pt-4">
      <a
        href="#hero"
        className="text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className="text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#services"
        className="text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Services
      </a>

      {/* Contact button now visible on mobile */}
      <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
        <Button className="w-full">Contact</Button>
      </a>
    </div>
  </div>
)}

      </div>
    </nav>
  )
}
