"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { 
  Video,
  Music,
  Play,
  Download,
  Upload,
  MessageSquare,
  Clock,
  Wand2
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TextVideoToMusicPage() {
  const [videoUploaded, setVideoUploaded] = React.useState(false)
  const [prompt, setPrompt] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [musicGenerated, setMusicGenerated] = React.useState(false)
  
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
      setMusicGenerated(true)
    }, 3000)
  }
  
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Text+Video-to-Music (TV2M)</h1>
        <p className="section-description">
          Generate custom music using both text prompts and video content analysis
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Music from Text and Video</CardTitle>
              <CardDescription>
                Upload a video and provide a text prompt to guide the music generation
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
                <label htmlFor="prompt" className="text-sm font-medium">Music Description</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Example: 'Generate music with piano instrument' or 'Create a dramatic orchestral piece that builds tension during the video's climax.'"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="music-style" className="text-sm font-medium">Music Style</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="music-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="orchestral">Orchestral</SelectItem>
                      <SelectItem value="piano">Piano Solo</SelectItem>
                      <SelectItem value="acoustic">Acoustic</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="influence-balance" className="text-sm font-medium">Influence Balance</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="influence-balance">
                      <SelectValue placeholder="Select balance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text-dominant">Text Dominant (80/20)</SelectItem>
                      <SelectItem value="text-priority">Text Priority (60/40)</SelectItem>
                      <SelectItem value="balanced">Balanced (50/50)</SelectItem>
                      <SelectItem value="video-priority">Video Priority (40/60)</SelectItem>
                      <SelectItem value="video-dominant">Video Dominant (20/80)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="synchronization" className="text-sm font-medium">Video Synchronization</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="synchronization">
                      <SelectValue placeholder="Select sync level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="loose">Loose - General mood matching</SelectItem>
                      <SelectItem value="moderate">Moderate - Scene transitions</SelectItem>
                      <SelectItem value="tight">Tight - Closely follows video action</SelectItem>
                      <SelectItem value="precise">Precise - Frame-accurate scoring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="complexity" className="text-sm font-medium">Musical Complexity</label>
                  <Slider id="complexity" defaultValue={[50]} min={0} max={100} step={5} disabled={!videoUploaded} />
                  <div className="flex justify-between text-xs text-muted-foreground pt-1">
                    <span>Simple</span>
                    <span>Moderate</span>
                    <span>Complex</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="key-instruments" className="text-sm font-medium">Featured Instruments</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="key-instruments">
                      <SelectValue placeholder="Select instruments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="from-prompt">From Prompt</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="strings">Strings</SelectItem>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="synth">Synthesizers</SelectItem>
                      <SelectItem value="full-orchestra">Full Orchestra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleGenerate} 
                disabled={isGenerating || !videoUploaded || !prompt.trim()}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating Music..." : "Generate Music"}
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Preview your video with generated music
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
                <h3 className="text-sm font-medium mb-2">Music Preview</h3>
                {musicGenerated ? (
                  <div className="bg-muted rounded-md p-3 flex flex-col gap-3">
                    <div className="w-full bg-secondary rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full w-1/3"></div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-4">
                      <Button size="icon" variant="ghost">
                        <Play className="h-5 w-5" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">2:45</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      Generated music will appear here
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">AI Composition Notes</h3>
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="bg-muted rounded-md p-3 h-24 overflow-y-auto">
                  {musicGenerated ? (
                    <p className="text-xs">
                      Created piano-focused composition as specified in prompt.
                      Analyzed video pacing and emotional content to structure musical progression.
                      Piano serves as the primary instrument with subtle string accompaniment
                      to enhance emotional moments. Music synchronizes with key scene changes 
                      and builds appropriately with the visual narrative.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Composition notes will appear here after generation
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={!musicGenerated}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Music Track
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  disabled={!musicGenerated}
                >
                  Download Video with Music
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
            Generate custom music for videos programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Text+Video-to-Music service through our API.
            Upload videos with text prompts and receive AI-generated music that combines
            both textual guidance and video content analysis. Control balance between text and video influence,
            synchronization level, musical complexity, and featured instruments.
            Perfect for creating custom soundtracks for videos, films, games, and other media.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 