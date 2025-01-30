"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function TextToStructuredContentConverter() {
  const [input, setInput] = useState("")
  const [heading, setHeading] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [includeHeading, setIncludeHeading] = useState(false)
  const [includeParagraph, setIncludeParagraph] = useState(false)
  const [isOrderedList, setIsOrderedList] = useState(true)
  const [output, setOutput] = useState("")

  const convertToStructuredContent = () => {
    const content = []

    if (includeHeading && heading) {
      content.push(`{
  type: "heading",
  text: "${heading}",
}`)
    }

    if (includeParagraph && paragraph) {
      content.push(`{
  type: "paragraph",
  text: "${paragraph.replace(/"/g, '\\"')}",
}`)
    }

    const items = input
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => `  "${line.trim()}"`)

    content.push(`{
  type: "list",
  style: "${isOrderedList ? "ordered" : "unordered"}",
  items: [
${items.join(",\n")}
  ],
}`)

    setOutput(content.join(",\n"))
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        alert("Copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Text to Structured Content Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="heading-checkbox"
              checked={includeHeading}
              onCheckedChange={(checked) => setIncludeHeading(checked as boolean)}
            />
            <Label htmlFor="heading-checkbox">Include Heading</Label>
          </div>
          {includeHeading && (
            <Input value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Enter heading..." />
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="paragraph-checkbox"
              checked={includeParagraph}
              onCheckedChange={(checked) => setIncludeParagraph(checked as boolean)}
            />
            <Label htmlFor="paragraph-checkbox">Include Paragraph</Label>
          </div>
          {includeParagraph && (
            <Textarea
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              placeholder="Enter paragraph..."
              className="min-h-[100px]"
            />
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ordered-list-checkbox"
              checked={isOrderedList}
              onCheckedChange={(checked) => setIsOrderedList(checked as boolean)}
            />
            <Label htmlFor="ordered-list-checkbox">Use Ordered List</Label>
          </div>
          <div>
            <Label htmlFor="input" className="block text-sm font-medium mb-2">
              List Items (one per line)
            </Label>
            <Textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter list items, one per line..."
              className="min-h-[200px]"
            />
          </div>
          <Button onClick={convertToStructuredContent}>Convert to Structured Content</Button>
          {output && (
            <div>
              <Label htmlFor="output" className="block text-sm font-medium mb-2">
                Output Structured Content
              </Label>
              <Textarea id="output" value={output} readOnly className="min-h-[200px] font-mono" />
            </div>
          )}
        </CardContent>
        <CardFooter>{output && <Button onClick={copyToClipboard}>Copy to Clipboard</Button>}</CardFooter>
      </Card>
    </div>
  )
}

