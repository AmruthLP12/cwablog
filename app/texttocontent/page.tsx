"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function TextToStructuredContentConverter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isOrderedList, setIsOrderedList] = useState(false)

  const convertToStructuredContent = () => {
    const lines = input.split("\n").filter((line) => line.trim() !== "")
    const content = []

    if (lines.length > 0) {
      // Assume the first line is the heading
      content.push(`{
  type: 'heading',
  text: '${lines[0].replace(/'/g, "\\'")}',
}`)

      if (lines.length > 1) {
        // Assume the second line is the paragraph
        content.push(`{
  type: 'paragraph',
  text: '${lines[1].replace(/'/g, "\\'")}',
}`)

        // Assume the rest are list items
        if (lines.length > 2) {
          const items = lines.slice(2).map((line) => `  '${line.trim().replace(/'/g, "\\'")}'`)
          content.push(`{
  type: 'list',${isOrderedList ? "\n  style: 'ordered'," : ""}
  items: [
${items.join(",\n")}
  ],
}`)
        }
      }
    }

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
          <div>
            <Label htmlFor="input">Input Text</Label>
            <Textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text here..."
              className="min-h-[200px]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ordered-list-checkbox"
              checked={isOrderedList}
              onCheckedChange={(checked) => setIsOrderedList(checked as boolean)}
            />
            <Label htmlFor="ordered-list-checkbox">Use Ordered List</Label>
          </div>
          <Button onClick={convertToStructuredContent}>Convert to Structured Content</Button>
          {output && (
            <div>
              <Label htmlFor="output">Output Structured Content</Label>
              <Textarea id="output" value={output} readOnly className="min-h-[200px] font-mono" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          {output && (
            <Button onClick={copyToClipboard} aria-label="Copy output to clipboard">
              Copy to Clipboard
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

