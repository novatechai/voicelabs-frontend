import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VolumeIcon, Headphones, MicIcon, Languages, PhoneCall, UsersRound } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="section-title">Welcome to VoiceLabs</h1>
        <p className="section-description">
          Your all-in-one platform for advanced AI voice services
        </p>
      </div>

      <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">Text to Speech</CardTitle>
            <Headphones className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Convert text to natural-sounding speech with customizable voices</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">Speech Recognition</CardTitle>
            <MicIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Accurately transcribe speech to text in real-time</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">Streaming Services</CardTitle>
            <VolumeIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Real-time streaming for TTS and ASR applications</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">Voice Cloning</CardTitle>
            <UsersRound className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Create custom voice models with just a few minutes of audio</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">Live Translation</CardTitle>
            <Languages className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Real-time speech-to-speech translation across multiple languages</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
            <CardTitle className="text-base font-medium">AI Calling</CardTitle>
            <PhoneCall className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Create AI agents for automated phone calls and customer service</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-6">Getting Started</h2>
        <div className="card-grid md:grid-cols-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Our API</CardTitle>
              <CardDescription>
                Integrate our voice services into your applications
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Our RESTful API allows you to access all voice services programmatically.
                Get started with just a few lines of code.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                Need something tailored to your needs?
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Our team can help you build custom voice applications
                for your specific use cases and industry requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 