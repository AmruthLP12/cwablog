"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function HTMLToJSONConverter() {
  const [htmlInput, setHtmlInput] = useState("")
  const [jsonOutput, setJsonOutput] = useState("")

  const generateCategories = (content: string): string[] => {
    const categories = new Set<string>()
    const keywordMap: { [key: string]: string[] } = {
      Development: ["code", "programming", "developer", "software"],
      "VS Code": ["VS Code", "Visual Studio Code", "IDE", "editor"],
      Windows: ["Windows", "Microsoft", "PC"],
      Web: ["HTML", "CSS", "JavaScript", "web development"],
      Tutorial: ["guide", "tutorial", "how-to", "learn"],
      Productivity: ["productivity", "efficiency", "workflow"],
    }

    for (const [category, keywords] of Object.entries(keywordMap)) {
      if (keywords.some((keyword) => content.toLowerCase().includes(keyword.toLowerCase()))) {
        categories.add(category)
      }
    }

    return Array.from(categories)
  }

  const convertHTMLToJSON = () => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlInput, "text/html")

    const result: any = {
      id: "",
      title: "",
      category: [],
      description: "",
      content: [],
      keyTakeaways: [],
      codeSnippet: {
        code: "",
        language: "html",
      },
    }

    // Extract YouTube video ID
    const iframe = doc.querySelector("iframe")
    if (iframe) {
      const src = iframe.getAttribute("src")
      const match = src?.match(/embed\/([^?]+)/)
      if (match) {
        result.id = match[1]
      }
    }

    // Extract title (assuming it's the first h1 or h2)
    const title = doc.querySelector("h1, h2")
    if (title) {
      result.title = title.textContent || ""
    }

    // Extract description (assuming it's the first p)
    const description = doc.querySelector("p")
    if (description) {
      result.description = description.textContent || ""
    }

    // Extract key takeaways
    const keyTakeaways = doc.querySelectorAll("h3 + ul li")
    result.keyTakeaways = Array.from(keyTakeaways).map((item) => item.textContent || "")

    // Extract content
    const contentNodes = doc.body.children
    for (const node of contentNodes) {
      if (node.nodeName === "H3") {
        result.content.push({
          type: "heading",
          text: node.textContent || "",
        })
      } else if (node.nodeName === "P") {
        result.content.push({
          type: "paragraph",
          text: node.textContent || "",
        })
      } else if (node.nodeName === "UL" || node.nodeName === "OL") {
        const items = Array.from(node.children).map((li) => li.textContent || "")
        result.content.push({
          type: "list",
          style: node.nodeName === "OL" ? "ordered" : "unordered",
          items,
        })
      }
    }

    // Extract code snippet (assuming it's the last code block)
    const codeBlocks = doc.querySelectorAll("code")
    if (codeBlocks.length > 0) {
      const lastCodeBlock = codeBlocks[codeBlocks.length - 1]
      result.codeSnippet.code = lastCodeBlock.textContent || ""
    }

    // Generate categories
    result.category = generateCategories(doc.body.textContent || "")

    // Convert result to string and remove quotes from specified fields
    let jsonString = JSON.stringify(result, null, 2)
    jsonString = jsonString.replace(/"(id|title|category|description|type|text|style|items|language)"\s*:/g, "$1:")
    jsonString = jsonString.replace(/"(keyTakeaways|content|codeSnippet)"\s*:/g, "$1:")

    // Convert code snippet to "code to text" format
    jsonString = jsonString.replace(
      /codeSnippet:\s*{\s*code:\s*"([\s\S]*?)",\s*language:\s*(\w+)\s*}/,
      (match, code, language) => {
        const escapedCode = code.replace(/\\/g, "\\\\").replace(/`/g, "\\`")
        return `codeSnippet: {
    code: \`
${escapedCode}
    \`,
    language: ${language}
  }`
      },
    )

    setJsonOutput(jsonString)
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(jsonOutput)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err))
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>HTML to JSON Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="html-input">Input HTML</Label>
            <Textarea
              id="html-input"
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              placeholder="Paste your HTML here..."
              className="min-h-[200px]"
            />
          </div>
          <Button onClick={convertHTMLToJSON}>Convert HTML to JSON</Button>
          {jsonOutput && (
            <div>
              <Label htmlFor="json-output">Output JSON</Label>
              <Textarea id="json-output" value={jsonOutput} readOnly className="min-h-[200px] font-mono" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          {jsonOutput && (
            <Button onClick={copyToClipboard} aria-label="Copy JSON to clipboard">
              Copy to Clipboard
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

