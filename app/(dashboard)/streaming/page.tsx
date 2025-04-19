import * as React from "react"
import { Headphones, MicIcon, Radio } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function StreamingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Streaming Services</h1>
        <p className="text-muted-foreground mt-2">
          Real-time audio streaming solutions for your applications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-primary" />
              <CardTitle>Streaming TTS</CardTitle>
            </div>
            <CardDescription>
              Generate and stream audio in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our streaming TTS API allows you to generate and stream audio content
              as it's being generated, reducing latency for your users.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MicIcon className="h-5 w-5 text-primary" />
              <CardTitle>Streaming ASR</CardTitle>
            </div>
            <CardDescription>
              Transcribe speech in real-time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our streaming ASR API transcribes audio in real-time as users speak,
              enabling responsive applications with minimal latency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-primary" />
              <CardTitle>WebSocket API</CardTitle>
            </div>
            <CardDescription>
              Easy integration with WebSockets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our WebSocket API makes it easy to add real-time audio capabilities
              to web applications, mobile apps, and other platforms.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              We're working on additional streaming features including bi-directional
              streaming for voice conversations, streaming voice cloning, and more.
              Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 