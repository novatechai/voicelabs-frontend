"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { 
  FileText,
  Play,
  Download,
  Volume2,
  ArrowLeft,
  Music,
  Wand2
} from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



export default function PromptToAudioPage() {
  const [prompt, setPrompt] = React.useState("")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [audioGenerated, setAudioGenerated] = React.useState(false)
  const [volume, setVolume] = React.useState(75)
  const [speed, setSpeed] = React.useState(1)
  
  const handleGenerate = () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setAudioGenerated(true)
    }, 2000)
  }
  
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Prompt to Audio</h1>
        <p className="section-description">
          Transform text prompts into high-quality audio with AI-powered voice generation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Audio from Prompt</CardTitle>
              <CardDescription>
                Enter your text prompt and customize voice settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">Text Prompt</label>
                <textarea
                  id="prompt"
                  className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter the text you want to convert to speech. You can be descriptive about the tone and style. Example: 'Welcome to our product showcase. I'm excited to show you our latest innovations.'"
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="voice-style" className="text-sm font-medium">Voice Style</label>
                  <Select>
                    <SelectTrigger id="voice-style">
                      <SelectValue placeholder="Select voice style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="calm">Calm</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="voice-gender" className="text-sm font-medium">Voice Gender</label>
                  <Select>
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
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium">Language</label>
                  <Select>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="en-GB">English (UK)</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="ko">Korean</SelectItem>
                      <SelectItem value="zh">Chinese (Mandarin)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="accent" className="text-sm font-medium">Accent</label>
                  <Select>
                    <SelectTrigger id="accent">
                      <SelectValue placeholder="Select accent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neutral">Neutral</SelectItem>
                      <SelectItem value="american">American</SelectItem>
                      <SelectItem value="british">British</SelectItem>
                      <SelectItem value="australian">Australian</SelectItem>
                      <SelectItem value="indian">Indian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="speed" className="text-sm font-medium">Speaking Speed</label>
                  <Slider id="speed" defaultValue={[100]} min={80} max={120} step={5} />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="pitch" className="text-sm font-medium">Pitch</label>
                  <Slider id="pitch" defaultValue={[0]} min={-20} max={20} step={1} />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="background-music" className="text-sm font-medium">Background Music</label>
                    <Select>
                      <SelectTrigger id="background-music" className="w-[180px]">
                        <SelectValue placeholder="None" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="gentle">Gentle Piano</SelectItem>
                        <SelectItem value="ambient">Ambient</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="upbeat">Upbeat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-2">
                    <label htmlFor="music-volume" className="text-xs text-muted-foreground">Music Volume</label>
                    <Slider id="music-volume" defaultValue={[30]} min={0} max={100} step={5} disabled />
                  </div>
                </div>
              </div>
              
              <Button className="w-full">
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Audio
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Listen to your generated audio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Music className="h-8 w-8 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground text-center px-4">
                    Your audio preview will appear here after processing
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <h3 className="text-sm font-medium">Audio Controls</h3>
                <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">
                    Audio player will appear here after generation
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4" disabled>
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
            Convert text to speech programmatically with our API
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Prompt to Audio service through our API.
            Submit text prompts and receive high-quality audio files in response.
            Customize voice parameters such as gender, style, language, speed, and pitch.
            Ideal for creating voiceovers, automated announcements, or audio content.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 