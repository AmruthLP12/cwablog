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
        type: "paragraph",
        text: "After downloading, follow these steps to install:",
      },
      {
        type: "list",
        items: [
          "Read through the terms and conditions.",
          'Accept the agreement and click "Next".',
          "Choose the installation path (default is usually fine).",
          "Make sure to check the options for adding VS Code to your context menu. This is super handy!",
          'Click "Next" and then "Install".',
          'Once the installation is complete, click "Finish" to launch VS Code.',
        ],
      },
      {
        type: "heading",
        text: "Exploring the Interface",
      },
      {
        type: "paragraph",
        text: "When you first open VS Code, you’ll see a clean interface with several icons on the left side:",
      },
      {
        type: "list",
        items: [
          "Explorer: This is where you can manage your files.",
          "Search: Quickly find files or text within your project.",
          "Source Control: Integrate with GitHub and manage your code versions.",
          "Extensions: Add new features to VS Code.",
        ],
      },
      {
        type: "heading",
        text: "Creating Your First Project",
      },
      {
        type: "paragraph",
        text: "Let’s create a simple project:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Create a new folder on your computer.",
          'Right-click the folder and select "Open with Code" (thanks to the context menu option you enabled earlier).',
          "Inside VS Code, create a new file named index.html.",
          "You can also create a style.css file for styling.",
        ],
      },
      {
        type: "heading",
        text: "Installing Essential Extensions",
      },
      {
        type: "paragraph",
        text: "To make your coding experience smoother, you’ll want to install some extensions:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Material Icon Theme: This changes the file icons to something more visually appealing.",
          "Prettier: A code formatter that helps keep your code neat and tidy.",
        ],
      },
      {
        type: "paragraph",
        text: "To install extensions:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Click on the Extensions icon in the sidebar.",
          "Search for the extension you want (like Prettier).",
          'Click "Install".',
        ],
      },
      {
        type: "heading",
        text: "Writing and Running Your Code",
      },
      {
        type: "paragraph",
        text: "Now that you have your files set up, let’s write some code:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Open index.html and start typing your HTML structure.",
          `Use Prettier to format your code by right-clicking and selecting "Format Document".`,
        ],
      },
      {
        type: "paragraph",
        text: "To run your code, you can use a live server extension or simply open the HTML file in your browser",
      },
      {
        type: "heading",
        text: "Keyboard Shortcuts for Productivity",
      },
      {
        type: "paragraph",
        text: "To speed things up, here are some handy keyboard shortcuts:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          '"Ctrl + P": Quickly open files.',
          '"Ctrl + `": Open the terminal.',
          '"Ctrl + B": Toggle the sidebar.',
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "And that’s it! You’re all set to start coding with Visual Studio Code. Remember, practice makes perfect, so don’t hesitate to explore and experiment with different features. If you found this guide helpful, consider subscribing for more tips and tutorials!",
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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to My First HTML Page</h1>
    <p>This is a simple HTML page with a heading and a paragraph.</p>
  </body>
</html>
        `,
      language: "html",
    },
  },
  // Add more videos as needed
];
