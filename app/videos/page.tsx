"use client";

import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

export default function VideosPage() {
  const allCategories = Array.from(new Set(videos.flatMap((video) => video.category)));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategories.length === 0 || video.category.some((c) => selectedCategories.includes(c));
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My YouTube Videos</h1>
      
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Category Filter */}
      <CategoryFilter categories={allCategories} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video}  />
        ))}
      </div>
    </div>
  );
}
