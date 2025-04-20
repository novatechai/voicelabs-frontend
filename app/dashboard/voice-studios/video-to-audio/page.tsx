"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { 
  Video,
  Play,
  Download,
  Upload,
  Music,
  Volume2,
  Wand2
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VideoToAudioPage() {
  const [videoUploaded, setVideoUploaded] = React.useState(false)
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [audioGenerated, setAudioGenerated] = React.useState(false)
  
  const handleUpload = () => {
    // Simulate file upload
    setTimeout(() => {
      setVideoUploaded(true)
    }, 1500)
  }
  
  const handleGenerate = () => {
    if (!videoUploaded) return
    
    setIsGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setAudioGenerated(true)
    }, 3000)
  }
  
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Video-to-Audio (V2A)</h1>
        <p className="section-description">
          Generate contextual audio narration based on video content analysis
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Audio from Video</CardTitle>
              <CardDescription>
                Upload a video and let our AI generate relevant audio narration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className={`border-2 border-dashed rounded-md border-muted-foreground/20 p-10 text-center ${videoUploaded ? 'bg-primary/5' : ''}`}
                onClick={!videoUploaded ? handleUpload : undefined}
                style={{cursor: !videoUploaded ? 'pointer' : 'default'}}
              >
                <div className="flex flex-col items-center gap-2">
                  {!videoUploaded ? (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop your video file here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports MP4, MOV, AVI (up to 500MB)
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Select File
                      </Button>
                    </>
                  ) : (
                    <>
                      <Video className="h-8 w-8 text-primary" />
                      <p className="text-sm font-medium">video_path.mp4</p>
                      <p className="text-xs text-muted-foreground">
                        Video uploaded successfully • 720p • 2:45 minutes
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Change Video
                      </Button>
                    </>
                  )}
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="audio-style" className="text-sm font-medium">Audio Style</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="audio-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="narration">Narration</SelectItem>
                      <SelectItem value="natural">Natural Sounds</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="dramatic">Dramatic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="voice-gender" className="text-sm font-medium">Voice Gender</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="voice-gender">
                      <SelectValue placeholder="Select voice gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="neutral">Gender Neutral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="audio-quality" className="text-sm font-medium">Audio Quality</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="audio-quality">
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="audio-detail" className="text-sm font-medium">Narration Detail Level</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="audio-detail">
                      <SelectValue placeholder="Select detail level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal - Key elements only</SelectItem>
                      <SelectItem value="moderate">Moderate - Standard description</SelectItem>
                      <SelectItem value="detailed">Detailed - Comprehensive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleGenerate} 
                disabled={isGenerating || !videoUploaded}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating Audio..." : "Generate Audio for Video"}
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Listen to generated audio based on your video
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                {videoUploaded ? (
                  <div className="flex flex-col items-center gap-2">
                    <Video className="h-8 w-8 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground text-center px-4">
                      Video preview
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Video className="h-8 w-8 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground text-center px-4">
                      Upload a video to see a preview
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Audio Preview</h3>
                {audioGenerated ? (
                  <div className="bg-muted rounded-md p-3 flex flex-col gap-3">
                    <div className="w-full bg-secondary rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full w-1/3"></div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                      <Button size="icon" variant="ghost">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      Generated audio will appear here
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Generated Description</h3>
                <div className="bg-muted rounded-md p-3 h-24 overflow-y-auto">
                  {audioGenerated ? (
                    <p className="text-xs">
                      Generated audio description includes narration of key video elements including scene transitions, 
                      main subjects, and actions depicted in the video. The audio matches the video content 
                      and provides contextual narration based on the visual analysis.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Audio details will appear here after generation
                    </p>
                  )}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4" 
                disabled={!audioGenerated}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Audio
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Generate audio from video content programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Video-to-Audio service through our API.
            Upload videos and receive AI-generated audio that matches the video content.
            Configure narration style, voice gender, detail level, and quality.
            Ideal for creating video narrations, descriptions, and contextual audio content.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 