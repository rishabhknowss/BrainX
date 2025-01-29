"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import YouTube from "react-youtube"

const topics = ["Mathematics", "Science", "History", "Literature", "Computer Science", "Art"]

const videoLinks = {
  Mathematics: ["1jVcsnY3JQ0", "V6yixyiJcos", "V7KXsB7E3Uo"],
  Science: ["1R8n5p9z5aI", "2LqzF5WauAw", "3xQmJ8bXzVo"],
  History: ["4xQmJ8bXzVo", "5xQmJ8bXzVo", "6xQmJ8bXzVo"],
  Literature: ["7xQmJ8bXzVo", "8xQmJ8bXzVo", "9xQmJ8bXzVo"],
  "Computer Science": ["10xQmJ8bXzVo", "11xQmJ8bXzVo", "12xQmJ8bXzVo"],
  Art: ["13xQmJ8bXzVo", "14xQmJ8bXzVo", "15xQmJ8bXzVo"],
}

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select a Topic</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Button
            key={topic}
            onClick={() => {
              setSelectedTopic(topic)
              setSelectedVideo(null)
            }}
            variant={selectedTopic === topic ? "default" : "outline"}
            className={`h-24 transition-transform transform hover:scale-105 ${
              selectedTopic === topic ? "bg-blue-500 text-white" : "bg-white text-black"
            } hover:bg-blue-500 hover:text-white`}
          >
            <span className="text-lg font-semibold">{topic}</span>
          </Button>
        ))}
      </div>
      {selectedTopic && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Videos for {selectedTopic}</h2>
          <div className="grid gap-8">
            {selectedVideo && (
              <div className="w-full flex justify-center bg-gray-900 p-4 rounded-lg">
                <YouTube videoId={selectedVideo} opts={opts} />
              </div>
            )}
            <div className="space-y-4">
              {videoLinks[selectedTopic].map((videoId, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(videoId)}
                  className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="text-white">Video {index + 1}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`text-white bg-slate-500 ${
                      selectedVideo === videoId ? "border-blue-500" : ""
                    }`}
                  >
                    {selectedVideo === videoId ? "Playing" : "Play"}
                  </Button>
                </button>
              ))}
            </div>
          </div>
          <Link href="/quiz">
            <Button className="mt-8">Take Quiz</Button>
          </Link>
        </div>
      )}
    </div>
  )
}