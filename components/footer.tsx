import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Image src="/logo.jpg" alt="Rutrick Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-lg sm:text-xl font-bold text-blue">Rutrick Pvt. Ltd.</span>
            </div>
            <p className="text-muted-foreground mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Smart Work. Lasting Impact. Empowering businesses with AI, marketing, and freelancing solutions.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">© 2024 Rutrick Pvt. Ltd. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
