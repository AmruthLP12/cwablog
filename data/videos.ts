import { Video } from "@/types/video";

// data/videos.ts
export const videos: Video[] = [
  {
    id: "DexgNMPCP34",
    title: "Getting Started with Visual Studio Code in Under 7 Minutes",
    category: ["Development", "VS Code", "Windows"],
    description:
      "In this quick guide, we’ll walk you through the essential steps to install and set up Visual Studio Code (VS Code) on Windows. Whether you’re a complete beginner or just need a refresher, this article will help you get started in no time.",
    content: [
      {
        type: "heading",
        text: "Downloading VS Code",
      },
      {
        type: "paragraph",
        text: "To kick things off, you’ll need to download VS Code. Here’s how:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Open your web browser.",

          'Type in "VS Code" in the search bar.',

          `Click on the link to the official site: ["code.visualstudio.com"](https://code.visualstudio.com).`,

          "Select the download option for Windows (or your respective OS).",

          "Once downloaded, open the installer.",
        ],
      },
      {
        type: "heading",
        text: "Installing VS Code",
      },
      {
        type: "list",
        items: [
          "Open your web browser and go to github.com.",
          "Enter your email address and click on 'Sign up for GitHub'.",
          "Create a strong password.",
          "Verify your account through the email sent to you.",
          "Once verified, sign in with your new credentials.",
        ],
      },
      {
        type: "paragraph",
        text: "Now you’re ready to start using GitHub!",
      },
    ],
    keyTakeaways: [
      "Download and install VS Code easily.",

      "Customize your interface for better usability.",

      "Install essential extensions to enhance your coding experience.",

      "Learn basic commands to write and run your first program.",

      "Discover keyboard shortcuts to boost productivity.",
    ],
    codeSnippet: {
      code: `
          // Example code snippet
          console.log("Hello, VS Code!");
        `,
      language: "javascript",
    },
  },
  // Add more videos as needed
];
