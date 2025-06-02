"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden border-teal-300 text-teal-300">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-teal-300/20">
        <nav className="flex flex-col space-y-6 mt-12">
          <Link
            href="#home"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            About Me
          </Link>
          <Link
            href="#technologies"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            Technologies
          </Link>
          <Link
            href="#projects"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            href="#hobbies"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            Hobbies
          </Link>
          <Link
            href="#education"
            className="text-xl font-medium text-white hover:text-teal-300 transition-colors"
            onClick={handleLinkClick}
          >
            Education
          </Link>
          <Link
            href="/admin"
            className="text-xl font-medium text-teal-300 hover:text-teal-100 transition-colors"
            onClick={handleLinkClick}
          >
            Admin Login
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
