"use client"

import * as React from "react"
import { Play, Pause } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { VoiceSaveButton } from "@/components/voice-save-button"

export default function TTSPage() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [text, setText] = React.useState(
    "Hello there! Welcome to VoiceLabs. Enter your text here to generate natural sounding speech."
  )
  const [voice, setVoice] = React.useState("nova")
  const [speed, setSpeed] = React.useState(1)
  const [pitch, setPitch] = React.useState(1)

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      setTimeout(() => {
        setIsPlaying(false)
      }, 3000)
    }
  }

  return (
    <div className="space-y-[var(--section-spacing)]">
      <div>
        <h1 className="section-title">Text-to-Speech</h1>
        <p className="section-description">
          Convert your text into natural-sounding speech with various voices and settings.
        </p>
      </div>

      <Card className="card">
        <CardHeader>
          <CardTitle>Input Text</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            id="text"
            placeholder="Enter text to convert to speech..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            className="min-h-[120px]"
          />
        </CardContent>
      </Card>

      <div className="card-grid md:grid-cols-2">
        <Card className="card">
          <CardHeader>
            <CardTitle>Voice Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="voice" className="mb-2 block">Voice</Label>
              <Select value={voice} onValueChange={setVoice}>
                <SelectTrigger id="voice">
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nova">Nova (Female)</SelectItem>
                  <SelectItem value="alloy">Alloy (Male)</SelectItem>
                  <SelectItem value="echo">Echo (Male)</SelectItem>
                  <SelectItem value="fable">Fable (Female)</SelectItem>
                  <SelectItem value="onyx">Onyx (Male)</SelectItem>
                  <SelectItem value="shimmer">Shimmer (Female)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="card">
          <CardHeader>
            <CardTitle>Audio Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="speed">Speed: {speed.toFixed(1)}x</Label>
              <Slider
                id="speed"
                min={0.5}
                max={2}
                step={0.1}
                value={[speed]}
                onValueChange={(value) => setSpeed(value[0])}
                aria-label="Speech Speed"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pitch">Pitch: {pitch.toFixed(1)}</Label>
              <Slider
                id="pitch"
                min={0.5}
                max={2}
                step={0.1}
                value={[pitch]}
                onValueChange={(value) => setPitch(value[0])}
                aria-label="Speech Pitch"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t mt-[var(--section-spacing)]">
        <Button
          variant="default"
          size="lg"
          onClick={handlePlay}
          disabled={!text || isPlaying}
          className="min-w-[120px]"
        >
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Stop
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Play
            </>
          )}
        </Button>
        <VoiceSaveButton
          text={text}
          voice={voice}
          speed={speed}
          pitch={pitch}
          disabled={!text}
        />
      </div>
    </div>
  )
} 