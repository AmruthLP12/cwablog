import Link from "next/link"
import Image from "next/image"
import type React from "react" // Added import for React

interface VideoCardProps {
  video: {
    id: string
    title: string
    description: string
    category: string[]
  }
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link href={`/videos/${video.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <Image
          src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
          alt={video.title}
          width={480}
          height={270}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{video.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
          <div className="flex gap-2 mt-2">
            {video.category.map((category) => (
              <div key={category} className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                {category}
              </div>
            ))} 
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard

