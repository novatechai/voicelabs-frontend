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
  Clock,
  Wand2
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VideoToMusicPage() {
  const [videoUploaded, setVideoUploaded] = React.useState(false)
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [musicGenerated, setMusicGenerated] = React.useState(false)
  
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
      setMusicGenerated(true)
    }, 3000)
  }
  
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Video-to-Music (V2M)</h1>
        <p className="section-description">
          Generate custom music tracks perfectly matched to your video content
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Music from Video</CardTitle>
              <CardDescription>
                Upload a video and let our AI generate a complementary music track
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
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="acoustic">Acoustic</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mood" className="text-sm font-medium">Mood</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="mood">
                      <SelectValue placeholder="Select mood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uplifting">Uplifting</SelectItem>
                      <SelectItem value="inspirational">Inspirational</SelectItem>
                      <SelectItem value="emotional">Emotional</SelectItem>
                      <SelectItem value="dramatic">Dramatic</SelectItem>
                      <SelectItem value="tense">Tense</SelectItem>
                      <SelectItem value="relaxed">Relaxed</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="tempo-match" className="text-sm font-medium">Tempo Matching</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="tempo-match">
                      <SelectValue placeholder="Select matching method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automatic">Automatic - Match video pace</SelectItem>
                      <SelectItem value="fixed">Fixed Tempo</SelectItem>
                      <SelectItem value="dynamic">Dynamic - Follow video action</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="key-instruments" className="text-sm font-medium">Key Instruments</label>
                  <Select disabled={!videoUploaded}>
                    <SelectTrigger id="key-instruments">
                      <SelectValue placeholder="Select primary instruments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-select based on video</SelectItem>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="strings">String Orchestra</SelectItem>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="synth">Synthesizers</SelectItem>
                      <SelectItem value="percussion">Percussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="intensity" className="text-sm font-medium">Music Intensity</label>
                  </div>
                  <Slider id="intensity" defaultValue={[50]} min={0} max={100} step={5} disabled={!videoUploaded} />
                  <div className="flex justify-between text-xs text-muted-foreground pt-1">
                    <span>Subtle</span>
                    <span>Balanced</span>
                    <span>Prominent</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleGenerate} 
                disabled={isGenerating || !videoUploaded}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating Music..." : "Generate Music for Video"}
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
                <h3 className="text-sm font-medium">Music Analysis</h3>
                <div className="bg-muted rounded-md p-3 h-24 overflow-y-auto">
                  {musicGenerated ? (
                    <p className="text-xs">
                      Generated music track is synchronized with the video's pacing and mood.
                      Highlights include dynamic tempo changes during action sequences and 
                      softer passages during quieter moments. The music enhances the emotional
                      impact of the video with matching tonal qualities.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Music analysis will appear here after generation
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
            Access our Video-to-Music service through our API.
            Upload videos and receive AI-generated music tracks that perfectly match the content.
            Control music style, mood, tempo matching, instrumentation, and intensity.
            Ideal for creating soundtracks, background music, and audio-visual productions.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 