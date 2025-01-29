export interface VideoContent {
  type: "heading" | "paragraph" | "list";
  text?: string;
  items?: string[];
  style?: "ordered" | "unordered"; // Add this
}

export interface Video {
  id: string;
  title: string;
  category: string[];
  description: string;
  content?: VideoContent[];
  keyTakeaways: string[];
  codeSnippet?: {
    code: string;
    language: string;
  };
}
