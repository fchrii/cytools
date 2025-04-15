"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Shield, Menu, Home, User, Code, Lock, Fingerprint, RotateCw } from "lucide-react"

const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="h-5 w-5 mr-2" />,
  },
  {
    name: "Base64",
    path: "/tools/base64",
    icon: <Code className="h-5 w-5 mr-2" />,
  },
  {
    name: "Caesar Cipher",
    path: "/tools/caesar",
    icon: <Lock className="h-5 w-5 mr-2" />,
  },
  {
    name: "SHA256",
    path: "/tools/sha256",
    icon: <Fingerprint className="h-5 w-5 mr-2" />,
  },
  {
    name: "ROT13",
    path: "/tools/rot13",
    icon: <RotateCw className="h-5 w-5 mr-2" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <User className="h-5 w-5 mr-2" />,
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center mr-4 space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold hidden md:inline-block">CyberTools</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Button key={route.path} variant={pathname === route.path ? "secondary" : "ghost"} size="sm" asChild>
              <Link href={route.path}>{route.name}</Link>
            </Button>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 mr-2" />
                <span className="font-bold">CyberTools</span>
              </div>
              <nav className="flex flex-col space-y-3">
                {routes.map((route) => (
                  <Button
                    key={route.path}
                    variant={pathname === route.path ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setOpen(false)}
                    asChild
                  >
                    <Link href={route.path}>
                      {route.icon}
                      {route.name}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
