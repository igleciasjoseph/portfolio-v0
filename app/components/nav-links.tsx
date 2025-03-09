"use client"

import Link from "next/link"
import { useCallback } from "react"

export default function NavLinks() {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerHeight = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <button 
        className="transition-colors hover:text-foreground/80"
        onClick={() => scrollToSection('about')}
      >
        About
      </button>
      <button 
        className="transition-colors hover:text-foreground/80"
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </button>
      <Link 
        href="mailto:igleciasjoseph@gmail.com" 
        className="transition-colors hover:text-foreground/80"
      >
        Contact
      </Link>
    </nav>
  )
} 