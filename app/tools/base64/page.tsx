"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDownUp, Copy, Trash } from "lucide-react"
import PageTransition from "@/components/PageTransition"

export default function Base64Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [activeTab, setActiveTab] = useState("encode")

  const handleEncode = () => {
    try {
      const encoded = btoa(input)
      setOutput(encoded)
    } catch (error) {
      setOutput("Error: Could not encode the input. Make sure it contains valid characters.")
    }
  }

  const handleDecode = () => {
    try {
      const decoded = atob(input)
      setOutput(decoded)
    } catch (error) {
      setOutput("Error: Could not decode the input. Make sure it is valid Base64.")
    }
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setOutput("")
  }

  const handleProcess = () => {
    if (activeTab === "encode") {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  return (
    <PageTransition>
      <div className="container px-4 py-12 mx-auto">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Base64 Encoder/Decoder</CardTitle>
            <CardDescription>Encode text to Base64 or decode Base64 to plain text</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="encode" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="encode">Encode</TabsTrigger>
                <TabsTrigger value="decode">Decode</TabsTrigger>
              </TabsList>
              <div className="space-y-4">
                <div>
                  <label htmlFor="input" className="block text-sm font-medium mb-2">
                    {activeTab === "encode" ? "Text to Encode" : "Base64 to Decode"}
                  </label>
                  <Textarea
                    id="input"
                    placeholder={activeTab === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex justify-center">
                  <Button onClick={handleProcess} className="mx-2">
                    <ArrowDownUp className="mr-2 h-4 w-4" />
                    {activeTab === "encode" ? "Encode" : "Decode"}
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
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              Base64 is an encoding scheme used to represent binary data in ASCII format.
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
