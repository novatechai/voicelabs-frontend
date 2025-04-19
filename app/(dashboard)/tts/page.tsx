"use client"

import * as React from "react"
import { Play, Pause, Save } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function TTSPage() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [text, setText] = React.useState("")
  const [voice, setVoice] = React.useState("en-US-Standard-A")
  const [speed, setSpeed] = React.useState([1])
  const [pitch, setPitch] = React.useState([0])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    // Here you would implement actual TTS playback
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Text to Speech</h1>
        <p className="text-muted-foreground mt-2">
          Convert your text into natural-sounding speech
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardContent className="pt-6">
            <Textarea
              placeholder="Enter the text you want to convert to speech..."
              className="min-h-[200px] resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="voice">Voice</Label>
              <Select value={voice} onValueChange={setVoice}>
                <SelectTrigger id="voice">
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US-Standard-A">English US (Female)</SelectItem>
                  <SelectItem value="en-US-Standard-B">English US (Male)</SelectItem>
                  <SelectItem value="en-GB-Standard-A">English UK (Female)</SelectItem>
                  <SelectItem value="en-GB-Standard-B">English UK (Male)</SelectItem>
                  <SelectItem value="es-ES-Standard-A">Spanish (Female)</SelectItem>
                  <SelectItem value="fr-FR-Standard-A">French (Female)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="speed">Speed</Label>
              <Slider
                id="speed"
                min={0.25}
                max={2}
                step={0.05}
                value={speed}
                onValueChange={setSpeed}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0.25x</span>
                <span>{speed[0]}x</span>
                <span>2x</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pitch">Pitch</Label>
              <Slider
                id="pitch"
                min={-10}
                max={10}
                step={1}
                value={pitch}
                onValueChange={setPitch}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>{pitch[0]}</span>
                <span>High</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex flex-col h-full justify-between gap-4">
            <div className="space-y-2">
              <Label>Audio Preview</Label>
              <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                Audio waveform visualization would appear here
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button onClick={handlePlay} className="w-full">
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" /> Play
                  </>
                )}
              </Button>
              <Button variant="outline" className="w-full">
                <Save className="mr-2 h-4 w-4" /> Save Audio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 