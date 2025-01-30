"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function ContentConverter() {
  const [structuredInput, setStructuredInput] = useState("")
  const [codeInput, setCodeInput] = useState("")
  const [languageInput, setLanguageInput] = useState("")
  const [structuredOutput, setStructuredOutput] = useState("")
  const [codeOutput, setCodeOutput] = useState("")
  const [isOrderedList, setIsOrderedList] = useState(false)

  const convertToStructuredContent = () => {
    const lines = structuredInput.split("\n").filter((line) => line.trim() !== "")
    const content = []

    if (lines.length > 0) {
      content.push(`{
  type: 'heading',
  text: '${lines[0].replace(/'/g, "\\'")}',
}`)

      if (lines.length > 1) {
        content.push(`{
  type: 'paragraph',
  text: '${lines[1].replace(/'/g, "\\'")}',
}`)

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

    setStructuredOutput(content.join(",\n"))
  }

  const detectLanguage = (code: string): string => {
    if (code.includes("<!DOCTYPE html>") || code.includes("<html")) return "html"
    if (code.includes("import React") || code.includes("function") || code.includes("=>")) return "javascript"
    if (code.includes("def ") || code.includes("import ") || code.includes("print(")) return "python"
    if (code.includes("public class") || code.includes("System.out.println")) return "java"
    if (code.includes("#include") || code.includes("int main()")) return "cpp"
    if (code.includes("<?php")) return "php"
    if (code.includes("using System;") || code.includes("namespace")) return "csharp"
    if (code.includes("fn main()") || code.includes("let mut")) return "rust"
    if (code.includes("package main") || code.includes("func main()")) return "go"
    return "plaintext"
  }

  const convertCodeToString = () => {
    const escapedCode = codeInput.replace(/`/g, "\\`").replace(/\$/g, "\\$")
    const language = languageInput.trim() || detectLanguage(codeInput)
    const output = `codeSnippet: {
  code: \`
${escapedCode}
  \`,
  language: "${language}",
},`
    setCodeOutput(output)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
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
          <CardTitle>Content Converter</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="structured">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="structured">Structured Content</TabsTrigger>
              <TabsTrigger value="code">Code to String</TabsTrigger>
            </TabsList>
            <TabsContent value="structured" className="space-y-4">
              <div>
                <Label htmlFor="structured-input">Input Text</Label>
                <Textarea
                  id="structured-input"
                  value={structuredInput}
                  onChange={(e) => setStructuredInput(e.target.value)}
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
              {structuredOutput && (
                <div>
                  <Label htmlFor="structured-output">Output Structured Content</Label>
                  <Textarea
                    id="structured-output"
                    value={structuredOutput}
                    readOnly
                    className="min-h-[200px] font-mono"
                  />
                  <Button onClick={() => copyToClipboard(structuredOutput)} className="mt-2">
                    Copy to Clipboard
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="code" className="space-y-4">
              <div>
                <Label htmlFor="code-input">Input Code</Label>
                <Textarea
                  id="code-input"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="Enter your code here..."
                  className="min-h-[200px]"
                />
              </div>
              <div>
                <Label htmlFor="language-input">Language (optional)</Label>
                <Input
                  id="language-input"
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  placeholder="Enter language (e.g., javascript, python, html)"
                />
              </div>
              <Button onClick={convertCodeToString}>Convert Code to String</Button>
              {codeOutput && (
                <div>
                  <Label htmlFor="code-output">Output Code String</Label>
                  <Textarea id="code-output" value={codeOutput} readOnly className="min-h-[200px] font-mono" />
                  <Button onClick={() => copyToClipboard(codeOutput)} className="mt-2">
                    Copy to Clipboard
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

