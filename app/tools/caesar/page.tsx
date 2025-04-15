"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDownUp, Copy, Trash } from "lucide-react"
import PageTransition from "@/components/PageTransition"

export default function CaesarCipherTool() {
  const [input, setInput] = useState("")
  const [shift, setShift] = useState(3)
  const [output, setOutput] = useState("")
  const [activeTab, setActiveTab] = useState("encrypt")
  const [allShifts, setAllShifts] = useState<string[]>([])

  const handleEncrypt = () => {
    const result = caesarCipher(input, shift)
    setOutput(result)
  }

  const handleDecrypt = () => {
    const result = caesarCipher(input, 26 - (shift % 26))
    setOutput(result)
  }

  const handleCrack = () => {
    const results = []
    for (let i = 1; i < 26; i++) {
      results.push(`Shift ${i}: ${caesarCipher(input, 26 - (i % 26))}`)
    }
    setAllShifts(results)
  }

  const caesarCipher = (text: string, shift: number) => {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 65 && code <= 90) {
          // Uppercase letters
          return String.fromCharCode(((code - 65 + shift) % 26) + 65)
        } else if (code >= 97 && code <= 122) {
          // Lowercase letters
          return String.fromCharCode(((code - 97 + shift) % 26) + 97)
        }
        return char
      })
      .join("")
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
    setAllShifts([])
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setOutput("")
    setAllShifts([])
  }

  const handleProcess = () => {
    if (activeTab === "encrypt") {
      handleEncrypt()
    } else if (activeTab === "decrypt") {
      handleDecrypt()
    } else {
      handleCrack()
    }
  }

  return (
    <PageTransition>
      <div className="container px-4 py-12 mx-auto">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Caesar Cipher Tool</CardTitle>
            <CardDescription>Encrypt, decrypt, or crack messages using the Caesar cipher</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="encrypt" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="encrypt">Encrypt</TabsTrigger>
                <TabsTrigger value="decrypt">Decrypt</TabsTrigger>
                <TabsTrigger value="crack">Crack</TabsTrigger>
              </TabsList>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="input" className="block text-sm font-medium mb-2">
                    {activeTab === "encrypt"
                      ? "Text to Encrypt"
                      : activeTab === "decrypt"
                        ? "Text to Decrypt"
                        : "Encrypted Text to Crack"}
                  </Label>
                  <Textarea
                    id="input"
                    placeholder={
                      activeTab === "encrypt"
                        ? "Enter text to encrypt..."
                        : activeTab === "decrypt"
                          ? "Enter text to decrypt..."
                          : "Enter encrypted text..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                {activeTab !== "crack" && (
                  <div>
                    <Label htmlFor="shift" className="block text-sm font-medium mb-2">
                      Shift Value (1-25)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="shift"
                        type="number"
                        min="1"
                        max="25"
                        value={shift}
                        onChange={(e) => setShift(Number.parseInt(e.target.value) || 0)}
                        className="w-24"
                      />
                      <span className="text-sm text-muted-foreground">How many positions to shift each letter</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button onClick={handleProcess} className="mx-2">
                    <ArrowDownUp className="mr-2 h-4 w-4" />
                    {activeTab === "encrypt" ? "Encrypt" : activeTab === "decrypt" ? "Decrypt" : "Crack"}
                  </Button>
                  <Button variant="outline" onClick={handleClear} className="mx-2">
                    <Trash className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                </div>

                {activeTab !== "crack" ? (
                  <div>
                    <Label htmlFor="output" className="block text-sm font-medium mb-2">
                      Result
                    </Label>
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
                ) : (
                  <div>
                    <Label className="block text-sm font-medium mb-2">All Possible Shifts</Label>
                    <div className="border rounded-md p-4 max-h-[300px] overflow-y-auto">
                      {allShifts.length > 0 ? (
                        <ul className="space-y-2">
                          {allShifts.map((result, index) => (
                            <li key={index} className="text-sm">
                              {result}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">Results will appear here after cracking...</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              The Caesar cipher is one of the simplest encryption techniques, where each letter is replaced by a letter
              some fixed number of positions down the alphabet.
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
