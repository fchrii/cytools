"use client"

import Link from "next/link"
import { ArrowRight, Shield, Lock, Code, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  {
    title: "Base64 Encoder/Decoder",
    description: "Encode or decode text using Base64 encoding scheme",
    icon: <Code className="h-8 w-8" />,
    href: "/tools/base64",
  },
  {
    title: "Caesar Cipher Cracker",
    description: "Crack or create messages encrypted with the Caesar cipher",
    icon: <Lock className="h-8 w-8" />,
    href: "/tools/caesar",
  },
  {
    title: "SHA256 Hasher",
    description: "Generate SHA256 hashes from text input",
    icon: <Fingerprint className="h-8 w-8" />,
    href: "/tools/sha256",
  },
  {
    title: "ROT13 Encoder/Decoder",
    description: "Encode or decode text using the ROT13 cipher",
    icon: <Shield className="h-8 w-8" />,
    href: "/tools/rot13",
  },
]

export default function Home() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                CyberTools
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A collection of useful cybersecurity tools to help you encode, decode, and secure your data.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/tools/base64">
                <Button className="px-6">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-12">
            Available Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Link href={tool.href} key={index} className="h-full">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="p-2 w-fit rounded-lg bg-primary/10 mb-2">{tool.icon}</div>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between group">
                      Try it now
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
