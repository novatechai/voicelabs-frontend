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
  MessageSquare,
  Volume2,
  Wand2
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TextVideoToAudioPage() {
  const [videoUploaded, setVideoUploaded] = React.useState(false)
  const [prompt, setPrompt] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [audioGenerated, setAudioGenerated] = React.useState(false)
  
  const handleUpload = () => {
    // Simulate file upload
    setTimeout(() => {
      setVideoUploaded(true)
    }, 1500)
  }
  
  const handleGenerate = () => {
    if (!videoUploaded || !prompt.trim()) return
    
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
        <h1 className="section-title">Text+Video-to-Audio (TV2A)</h1>
        <p className="section-description">
          Generate high-quality audio using both text prompts and video content analysis
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Audio from Text and Video</CardTitle>
              <CardDescription>
                Upload a video and provide a text prompt to guide the audio generation
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
              
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">Text Prompt</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Example: 'Ocean waves crashing with people laughing' or 'Create a suspenseful audio narration describing what's happening in this video.'"
                />
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
                      <SelectItem value="sound-effects">Sound Effects</SelectItem>
                      <SelectItem value="naturalistic">Naturalistic</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="documentary">Documentary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="priority" className="text-sm font-medium">Priority Balance</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select balance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-heavy">Text Heavy (80/20)</SelectItem>
                      <SelectItem value="text-priority">Text Priority (60/40)</SelectItem>
                      <SelectItem value="balanced">Balanced (50/50)</SelectItem>
                      <SelectItem value="video-priority">Video Priority (40/60)</SelectItem>
                      <SelectItem value="video-heavy">Video Heavy (20/80)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="voice-quality" className="text-sm font-medium">Voice Quality</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="voice-quality">
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="high">High Definition</SelectItem>
                      <SelectItem value="ultra">Ultra HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="sound-effects" className="text-sm font-medium">Sound Effects Level</label>
                  <Slider id="sound-effects" defaultValue={[50]} min={0} max={100} step={5} disabled={!videoUploaded} />
                  <div className="flex justify-between text-xs text-muted-foreground pt-1">
                    <span>Minimal</span>
                    <span>Balanced</span>
                    <span>Rich</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleGenerate} 
                disabled={isGenerating || !videoUploaded || !prompt.trim()}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating Audio..." : "Generate Audio"}
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Preview video with generated audio
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
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">AI Processing Notes</h3>
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="bg-muted rounded-md p-3 h-24 overflow-y-auto">
                  {audioGenerated ? (
                    <p className="text-xs">
                      Combined text prompt with video scene analysis to create contextual audio.
                      Detected ocean waves in video and enhanced with specified sound effects.
                      Incorporated laughing sounds as mentioned in the prompt, synchronized with
                      people appearing in frame. Dynamic volume adjustment based on scene intensity.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Processing notes will appear here after generation
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={!audioGenerated}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Audio
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={!audioGenerated}
                >
                  Download Video with Audio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Generate context-aware audio programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Text+Video-to-Audio service through our API.
            Upload videos with text prompts and receive AI-generated audio that combines
            both textual guidance and video content analysis. Configure priority balance,
            audio style, voice quality, and sound effects levels.
            Perfect for creating immersive audio experiences for videos, games, and interactive media.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 