import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VolumeIcon, Headphones, MicIcon, Languages, PhoneCall, UsersRound } from "lucide-react"
import Link from "next/link"

const featureCards = [
  {
    title: "Text to Speech",
    icon: Headphones,
    description: "Convert text to natural-sounding speech with customizable voices.",
    href: "/tts",
  },
  {
    title: "Speech Recognition",
    icon: MicIcon,
    description: "Accurately transcribe speech to text in real-time.",
    href: "/asr",
  },
  {
    title: "Streaming Services",
    icon: VolumeIcon,
    description: "Real-time streaming for TTS and ASR applications.",
    href: "/streaming",
  },
  {
    title: "Voice Cloning",
    icon: UsersRound,
    description: "Create custom voice models with just a few minutes of audio.",
    href: "/voice-cloning",
  },
  {
    title: "Live Translation",
    icon: Languages,
    description: "Real-time speech-to-speech translation across languages.",
    href: "/translation",
  },
  {
    title: "AI Calling",
    icon: PhoneCall,
    description: "Create AI agents for automated phone calls & customer service.",
    href: "/ai-calling",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-[var(--section-spacing)]">
      <div>
        <h1 className="section-title">Welcome to VoiceLabs</h1>
        <p className="section-description">
          Your all-in-one platform for advanced AI voice services
        </p>
      </div>

      <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => {
          const Icon = feature.icon
          return (
            <Link key={feature.title} href={feature.href} className="block">
              <Card className="card h-full hover:border-primary/50">
                <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
                  <CardTitle className="text-base font-medium">
                    {feature.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
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