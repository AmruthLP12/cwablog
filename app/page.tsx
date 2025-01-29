import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
      <p className="text-xl mb-8">Explore my YouTube videos and projects</p>
      <div className="flex justify-center space-x-4">
        <Link href="/videos" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Videos
        </Link>
        <Link href="/projects" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          View Projects
        </Link>
      </div>
    </div>
  )
}

