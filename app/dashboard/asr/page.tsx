"use client"

import * as React from "react"
import { Mic, MicOff, Save, Copy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function ASRPage() {
  const [isRecording, setIsRecording] = React.useState(false)
  const [transcript, setTranscript] = React.useState("")
  const [language, setLanguage] = React.useState("en-US")
  const [realtime, setRealtime] = React.useState(true)

  const handleRecordToggle = () => {
    setIsRecording(!isRecording)
    // Here you would implement actual recording functionality
    if (!isRecording) {
      // Simulate real-time transcription with a placeholder
      const timer = setTimeout(() => {
        setTranscript(
          "This is a simulated transcript of what would be captured from your microphone. In the actual implementation, this would update in real-time as you speak."
        )
      }, 2000)
      return () => clearTimeout(timer)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Speech Recognition</h1>
        <p className="text-muted-foreground mt-2">
          Accurately transcribe speech to text
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="en-GB">English (UK)</SelectItem>
                  <SelectItem value="es-ES">Spanish</SelectItem>
                  <SelectItem value="fr-FR">French</SelectItem>
                  <SelectItem value="de-DE">German</SelectItem>
                  <SelectItem value="ja-JP">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="realtime">Real-time transcription</Label>
                <p className="text-xs text-muted-foreground">
                  Transcribe as you speak
                </p>
              </div>
              <Switch
                id="realtime"
                checked={realtime}
                onCheckedChange={setRealtime}
              />
            </div>

            <div className="pt-4">
              <Button
                onClick={handleRecordToggle}
                variant={isRecording ? "destructive" : "default"}
                className="w-full h-16"
              >
                {isRecording ? (
                  <>
                    <MicOff className="mr-2 h-5 w-5" /> Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-5 w-5" /> Start Recording
                  </>
                )}
              </Button>
            </div>

            <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Audio waveform visualization would appear here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex flex-col h-full">
            <div className="space-y-2 flex-grow">
              <div className="flex justify-between items-center">
                <Label htmlFor="transcript">Transcript</Label>
                <div className="space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Textarea
                id="transcript"
                placeholder="Transcription will appear here..."
                className="min-h-[300px] resize-none"
                value={transcript}
                readOnly
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 