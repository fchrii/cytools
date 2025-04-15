"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDownUp, Copy, Trash } from "lucide-react"
import PageTransition from "@/components/PageTransition"

export default function Sha256Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleHash = async () => {
    if (!input) return

    try {
      const encoder = new TextEncoder()
      const data = encoder.encode(input)
      const hashBuffer = await crypto.subtle.digest("SHA-256", data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
      setOutput(hashHex)
    } catch (error) {
      setOutput("Error generating hash. Please try again.")
    }
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <PageTransition>
      <div className="container px-4 py-12 mx-auto">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">SHA-256 Hasher</CardTitle>
            <CardDescription>Generate SHA-256 hash from text input</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="input" className="block text-sm font-medium mb-2">
                  Text to Hash
                </label>
                <Textarea
                  id="input"
                  placeholder="Enter text to hash..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex justify-center">
                <Button onClick={handleHash} className="mx-2">
                  <ArrowDownUp className="mr-2 h-4 w-4" />
                  Generate Hash
                </Button>
                <Button variant="outline" onClick={handleClear} className="mx-2">
                  <Trash className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </div>
              <div>
                <label htmlFor="output" className="block text-sm font-medium mb-2">
                  SHA-256 Hash
                </label>
                <div className="relative">
                  <Textarea
                    id="output"
                    value={output}
                    readOnly
                    className="min-h-[80px] font-mono text-sm"
                    placeholder="Hash will appear here..."
                  />
                  {output && (
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={handleCopy}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              SHA-256 is a cryptographic hash function that produces a 256-bit (32-byte) hash value. It is commonly used
              for digital signatures, password storage, and blockchain technology.
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
