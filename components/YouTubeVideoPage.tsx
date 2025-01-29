// components/YouTubeVideoPage.tsx
"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Video } from "../types/video";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CodeBlock = dynamic(() => import("@/components/CodeBlock"), {
  ssr: false,
});

interface YouTubeVideoPageProps {
  video: Video;
}

function highlightText(text: string) {
  return text.replace(/"([^"]+)"/g, "**$1**"); // Converts quoted text to bold in Markdown
}

export default function YouTubeVideoPage({ video }: YouTubeVideoPageProps) {
  if (!video) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Image
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          width={1280}
          height={720}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-4">
        {video.category.map((cat, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {cat}
          </span>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

      <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{video.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2">
          {video.keyTakeaways.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Content</h2>
        {video.content?.map((section, index) => {
          switch (section.type) {
            case "heading":
              return (
                <h3 key={index} className="text-xl font-semibold mt-6 mb-4">
                  {section.text}
                </h3>
              );
            case "paragraph":
              return (
                <p key={index} className="mb-4">
                  {section.text}
                </p>
              );
            case "list":
              return section.style === "ordered" ? (
                <ol key={index} className="list-decimal pl-5 space-y-2 mb-4">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {highlightText(item)}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul key={index} className="list-disc pl-5 space-y-2 mb-4">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {highlightText(item)}
                      </ReactMarkdown>
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      {video.codeSnippet && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Code Snippet</h2>
          <CodeBlock
            code={video.codeSnippet.code}
            language={video.codeSnippet.language}
          />
        </div>
      )}
    </div>
  );
}
