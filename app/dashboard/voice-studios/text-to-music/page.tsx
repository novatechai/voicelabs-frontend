"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { 
  Music,
  Play,
  Download,
  PauseCircle,
  ArrowLeft,
  Clock,
  Wand2
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



export default function TextToMusicPage() {
  const [prompt, setPrompt] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [musicGenerated, setMusicGenerated] = React.useState(false)
  const [duration, setDuration] = React.useState(30)
  
  const handleGenerate = () => {
    if (!prompt.trim()) return
    
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
        <h1 className="section-title">Text-to-Music (T2M)</h1>
        <p className="section-description">
          Create music tracks from text descriptions using AI composition
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Music from Text</CardTitle>
              <CardDescription>
                Enter a description of the music you want to create
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">Music Description</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe the music you want to generate. Example: 'A music with piano and violin' or 'An upbeat electronic dance track with synth leads and a strong bass line.'"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="music-style" className="text-sm font-medium">Music Style</label>
                  <Select>
                    <SelectTrigger id="music-style">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="ambient">Ambient</SelectItem>
                      <SelectItem value="orchestral">Orchestral</SelectItem>
                      <SelectItem value="jazz">Jazz</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="pop">Pop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mood" className="text-sm font-medium">Mood</label>
                  <Select>
                    <SelectTrigger id="mood">
                      <SelectValue placeholder="Select mood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="happy">Happy</SelectItem>
                      <SelectItem value="sad">Sad</SelectItem>
                      <SelectItem value="energetic">Energetic</SelectItem>
                      <SelectItem value="calm">Calm</SelectItem>
                      <SelectItem value="epic">Epic</SelectItem>
                      <SelectItem value="mysterious">Mysterious</SelectItem>
                      <SelectItem value="romantic">Romantic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="duration" className="text-sm font-medium">Duration</label>
                    <span className="text-xs text-muted-foreground">{duration} seconds</span>
                  </div>
                  <Slider 
                    id="duration" 
                    value={[duration]} 
                    onValueChange={(values) => setDuration(values[0])}
                    min={15} 
                    max={120} 
                    step={15} 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="tempo" className="text-sm font-medium">Tempo</label>
                  <Select>
                    <SelectTrigger id="tempo">
                      <SelectValue placeholder="Select tempo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow (60-80 BPM)</SelectItem>
                      <SelectItem value="medium">Medium (90-120 BPM)</SelectItem>
                      <SelectItem value="fast">Fast (130-160 BPM)</SelectItem>
                      <SelectItem value="very-fast">Very Fast (170+ BPM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="instruments" className="text-sm font-medium">Key Instruments</label>
                  <Select>
                    <SelectTrigger id="instruments">
                      <SelectValue placeholder="Select primary instruments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piano">Piano</SelectItem>
                      <SelectItem value="strings">String Orchestra</SelectItem>
                      <SelectItem value="guitar">Guitar</SelectItem>
                      <SelectItem value="synth">Synthesizers</SelectItem>
                      <SelectItem value="drums">Drums & Percussion</SelectItem>
                      <SelectItem value="brass">Brass Instruments</SelectItem>
                      <SelectItem value="woodwinds">Woodwinds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleGenerate} 
                disabled={isGenerating || !prompt.trim()}
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate Music"}
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Listen to your generated music
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Music className="h-8 w-8 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground text-center px-4">
                    {musicGenerated 
                      ? "Music generated successfully!" 
                      : "Your music preview will appear here after processing"}
                  </p>
                </div>
              </div>
              
              {musicGenerated && (
                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Music Controls</h3>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{duration}s</span>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-md p-3 flex flex-col gap-3">
                    <div className="w-full bg-secondary rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full w-1/4"></div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                      <Button size="icon" variant="ghost">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <Button 
                variant="outline" 
                className="w-full mt-4" 
                disabled={!musicGenerated}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Music
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Generate music from text descriptions programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Text-to-Music service through our API.
            Submit text descriptions and receive AI-generated music tracks in response.
            Control music style, mood, tempo, instrumentation, and duration.
            Ideal for creating background music, soundtracks, or audio branding elements.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 