"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDownUp, Copy, Trash } from "lucide-react"
import PageTransition from "@/components/PageTransition"

export default function Rot13Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleRot13 = () => {
    const result = input
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0)

        // For uppercase letters
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + 13) % 26) + 65)
        }

        // For lowercase letters
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + 13) % 26) + 97)
        }

        // For non-alphabetic characters
        return char
      })
      .join("")

    setOutput(result)
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
            <CardTitle className="text-2xl">ROT13 Encoder/Decoder</CardTitle>
            <CardDescription>Encode or decode text using the ROT13 cipher (13-letter rotation)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="input" className="block text-sm font-medium mb-2">
                  Text to Encode/Decode
                </label>
                <Textarea
                  id="input"
                  placeholder="Enter text to encode or decode..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex justify-center">
                <Button onClick={handleRot13} className="mx-2">
                  <ArrowDownUp className="mr-2 h-4 w-4" />
                  Encode/Decode
                </Button>
                <Button variant="outline" onClick={handleClear} className="mx-2">
                  <Trash className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </div>
              <div>
                <label htmlFor="output" className="block text-sm font-medium mb-2">
                  Result
                </label>
                <div className="relative">
                  <Textarea
                    id="output"
                    value={output}
                    readOnly
                    className="min-h-[120px]"
                    placeholder="Result will appear here..."
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
              ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the
              alphabet. ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied.
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
