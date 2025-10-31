"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="text-2xl lg:text-3xl font-light tracking-wider">ATELIER</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              브랜드 소개
            </a>
            <a href="#collections" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              컬렉션
            </a>
            <a href="#values" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              가치
            </a>
            <a href="#contact" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              문의
            </a>
            <a href="/shipping" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              배송 안내
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              브랜드 소개
            </a>
            <a
              href="#collections"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              컬렉션
            </a>
            <a
              href="#values"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              가치
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              문의
            </a>
            <a
              href="/shipping"
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              배송 안내
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
