"use client"

import Link from "next/link"

export default function NavLinks() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link 
        href="#about" 
        className="transition-colors hover:text-foreground/80"
        scroll={false}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        About
      </Link>
      <Link 
        href="#projects" 
        className="transition-colors hover:text-foreground/80"
        scroll={false}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Projects
      </Link>
      <Link 
        href="mailto:igleciasjoseph@gmail.com" 
        className="transition-colors hover:text-foreground/80"
      >
        Contact
      </Link>
    </nav>
  )
} 