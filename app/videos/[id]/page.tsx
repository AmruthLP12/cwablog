// app/videos/[id]/page.tsx
import { notFound } from "next/navigation";
import YouTubeVideoPage from "@/components/YouTubeVideoPage";
import { videos } from "@/data/videos";

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    notFound();
  }

  return <YouTubeVideoPage video={video} />;
}