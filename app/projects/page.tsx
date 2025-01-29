import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    id: 1,
    title: "Blog App",
    description: "A personal blog built with Next.js and Tailwind CSS",
    category: "Web Development",
    liveLink: "https://example.com/blog-app",
    githubLink: "https://github.com/yourusername/blog-app",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application using OpenWeatherMap API",
    category: "Web Development",
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A simple task management application",
    category: "Productivity",
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/yourusername/task-manager",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

