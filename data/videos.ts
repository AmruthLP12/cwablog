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
  {
    id: "Fyimm_N0Gy8",
    title:
      " GitHub for Beginners: Create an Account, Push Code, and Use VS Code Like a Pro!",
    category: ["Development", "VS Code", "Windows", "Tutorial"],
    description:
      "In this guide, we’ll explore how to set up GitHub, a powerful platform for developers to collaborate and share code. Whether you’re a complete beginner or just need a refresher, this step-by-step tutorial will help you get started with GitHub and VS Code.",
    content: [
      {
        type: "heading",
        text: "Creating Your GitHub Account",
      },
      {
        type: "paragraph",
        text: "To kick things off, you need to create a GitHub account. Here’s how:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Open your web browser and go to github.com.",
          'Enter your email address and click on "Sign up for GitHub".',
          "Create a strong password.",
          "Verify your account through the email sent to you.",
          "Once verified, sign in with your new credentials.",
        ],
      },
      {
        type: "paragraph",
        text: "Now you’re ready to start using GitHub!",
      },
      {
        type: "heading",
        text: "Installing Git",
      },
      {
        type: "paragraph",
        text: "Next, you need to install Git, which is essential for tracking changes and syncing your code. Here’s how:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          'Go to your browser and search for "Git".',
          "Click on the official Git website and choose your operating system.",
          "Download the latest version for your system (e.g., Windows).",
          'Run the installer and keep clicking "Next" to accept the default settings.',
          "Once installed, open the command prompt and type git --version to confirm it’s working.",
        ],
      },
      {
        type: "heading",
        text: "Setting Up Your Identity",
      },
      {
        type: "paragraph",
        text: "Before you start using Git, you need to set up your identity. This is important for tracking who made changes. Here’s how:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Open your command prompt.",
          'Type the following commands:\n\ngit config --global user.name "Your Name"\ngit config --global user.email "your_email@example.com"\n\n',
          "To check your configuration, type git config --list.",
        ],
      },
      {
        type: "heading",
        text: "Creating Your First Repository",
      },
      {
        type: "paragraph",
        text: "Now that you have Git set up, it’s time to create your first repository:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          'Open VS Code and create a new folder named "git_demo".',
          "Inside this folder, create a new file (e.g., hello.txt).",
          'Go back to GitHub and click on "New Repository".',
          'Name your repository (e.g., "my_first_repo") and add a description if you want.',
          'Choose whether you want it to be public or private, then click "Create repository".',
        ],
      },
      {
        type: "heading",
        text: "Initializing Your Local Repository",
      },
      {
        type: "paragraph",
        text: "With your repository created, you need to link it to your local project:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Open the terminal in VS Code.",
          "Type git init to initialize a new Git repository.",
          "Stage your files by typing git add . to add all files.",
          'Commit your changes with a message: git commit -m "Initial commit".',
          "Set the default branch to main: git branch -M main.",
          "Link your local repository to GitHub: git remote add origin <repository-url>.",
        ],
      },
      {
        type: "heading",
        text: "Pushing Your Code to GitHub",
      },
      {
        type: "paragraph",
        text: "Now it’s time to push your code to GitHub:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Type git push -u origin main to upload your files.",
          "If prompted, sign in through your browser to authorize.",
          "Refresh your GitHub repository page to see your files.",
        ],
      },
      {
        type: "heading",
        text: "Making Changes and Committing Again",
      },
      {
        type: "paragraph",
        text: "As you work on your project, you’ll want to make changes and push them to GitHub:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Edit your files in VS Code.",
          "Stage the changes with git add <file-name>.",
          'Commit your changes with a message: git commit -m "Updated file".',
          "Push the changes again using git push.",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Congratulations! You’ve successfully set up GitHub, created a repository, and pushed your first file. You’ve also learned how to use VS Code for coding and version control. If you found this guide helpful, don’t forget to like and subscribe for more tutorials!",
      },
    ],
    keyTakeaways: [
      "Create a GitHub account and verify it.",
      "Install Git on your system.",
      "Set up your identity in Git.",
      "Create a repository and push your first file.",
      "Use VS Code for coding and version control.",
    ],
    codeSnippet: {
      code: "git push",
      language: "html",
    },
  },
  {
    id: "T8RurS56pZs",
    title:
      "How to Set Up MongoDB Atlas and Connect It to Your Backend | Step-by-Step Tutorial",
    category: ["Development", "VS Code", "Tutorial"],
    description:
      "In this tutorial, we’ll walk through the process of setting up MongoDB Atlas, a powerful cloud database, and connecting it to your Express.js backend. This guide is perfect for beginners looking to integrate a database into their projects.",
    content: [
      {
        type: "heading",
        text: "Getting Started with MongoDB Atlas",
      },
      {
        type: "paragraph",
        text: "First things first, head over to the MongoDB Atlas website. You’ll need to sign in. You can use your Google account or any other method available. Once you’re in, you’ll want to create a new project. You can name it whatever you like; for this example, let’s call it Express.",
      },
      {
        type: "heading",
        text: "Creating Your Cluster",
      },
      {
        type: "paragraph",
        text: "After creating your project, it’s time to set up your cluster. Click on Create Cluster. You’ll see options for different types of clusters. For beginners, the Free Tier is perfect. Choose that option, and give your cluster a name, like Express. You can leave the provider as AWS and select a region that’s closest to you.",
      },
      {
        type: "heading",
        text: "Setting Up Database Users",
      },
      {
        type: "paragraph",
        text: "Once your cluster is created, you’ll need to set up a database user. This is important for accessing your database. Choose a username and password that you’ll remember. Make sure to keep this information safe, as you’ll need it later.",
      },
      {
        type: "heading",
        text: "Configuring Network Access",
      },
      {
        type: "paragraph",
        text: "Next, you’ll want to allow access to your database. By default, MongoDB Atlas restricts access to your IP address. To allow access from anywhere, go to Network Access and click on Add IP Address. Select Allow Access from Anywhere and confirm. This will make your database accessible from any IP address.",
      },
      {
        type: "heading",
        text: "Setting Up Your Express.js Project",
      },
      {
        type: "paragraph",
        text: "Now that your MongoDB Atlas is ready, let’s set up your Express.js project. Open your terminal and create a new folder for your project. Inside that folder, run the following command to initialize a new Node.js project:",
      },
      {
        type: "paragraph",
        text: "Next, install the necessary packages:",
      },
      {
        type: "heading",
        text: "Creating Your App.js File",
      },
      {
        type: "paragraph",
        text: "Create a file named app.js in your project folder. This is where you’ll write the code to connect your Express app to MongoDB. Start by importing the required packages:",
      },
      {
        type: "heading",
        text: "Connecting to MongoDB",
      },
      {
        type: "paragraph",
        text: "Now, let’s connect to MongoDB. Use the connection string you copied from your MongoDB Atlas dashboard. Replace the password placeholder with your actual password:",
      },
      {
        type: "heading",
        text: "Using Environment Variables",
      },
      {
        type: "paragraph",
        text: "To keep your credentials safe, you should use environment variables. Create a file named .env in your project root and add your MongoDB connection string there:",
      },
      {
        type: "paragraph",
        text: "Make sure to replace <username>, <password>, and <dbname> with your actual MongoDB credentials.",
      },
      {
        type: "heading",
        text: "Testing Your Connection",
      },
      {
        type: "paragraph",
        text: "To test if everything is working, you can set up a simple route in your app.js file:",
      },
      {
        type: "paragraph",
        text: "Run your application using:",
      },
      {
        type: "paragraph",
        text: "Visit http://localhost:3000 in your browser, and you should see Hello MongoDB! displayed.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Congratulations! You’ve successfully set up MongoDB Atlas and connected it to your Express.js backend. This is a great step towards building more complex applications. If you found this tutorial helpful, consider giving it a like and subscribing for more content!",
      },
    ],
    keyTakeaways: [
      "Setting up a free MongoDB Atlas cluster",
      "Configuring users and IP access",
      "Using .env for secure credentials",
      "Connecting MongoDB to an Express.js backend",
    ],
    codeSnippet: {
      code: "http://localhost:3000",
      language: "html",
    },
  },
];
