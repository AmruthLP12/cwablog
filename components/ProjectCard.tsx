import type React from "react"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    category: string
    liveLink: string
    githubLink: string
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {project.category}
          </span>
          <div className="flex space-x-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

