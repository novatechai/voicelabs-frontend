import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  VolumeIcon, 
  Headphones, 
  MicIcon, 
  Languages, 
  PhoneCall, 
  UsersRound,
  ArrowRightIcon,
  Code,
  MessagesSquare
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featureCards = [
  {
    title: "Text to Speech",
    icon: Headphones,
    description: "Convert text to natural-sounding speech with customizable voices.",
    href: "/dashboard/tts",
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    title: "Speech Recognition",
    icon: MicIcon,
    description: "Accurately transcribe speech to text in real-time.",
    href: "/dashboard/asr",
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    title: "Streaming Services",
    icon: VolumeIcon,
    description: "Real-time streaming for TTS and ASR applications.",
    href: "/dashboard/streaming",
    color: "from-green-500/10 to-green-600/5"
  },
  {
    title: "Voice Cloning",
    icon: UsersRound,
    description: "Create custom voice models with just a few minutes of audio.",
    href: "/dashboard/voice-cloning",
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    title: "Live Translation",
    icon: Languages,
    description: "Real-time speech-to-speech translation across languages.",
    href: "/dashboard/translation",
    color: "from-pink-500/10 to-pink-600/5"
  },
  {
    title: "AI Calling",
    icon: PhoneCall,
    description: "Create AI agents for automated phone calls & customer service.",
    href: "/dashboard/ai-calling",
    color: "from-indigo-500/10 to-indigo-600/5"
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-[var(--section-spacing)]">
      {/* Welcome Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="section-title flex items-center gap-3">
            <VolumeIcon className="h-8 w-8 text-primary" />
            Welcome to VoiceLabs
          </h1>
          <p className="section-description">
            Your all-in-one platform for advanced AI voice services
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="group">
              Get Started <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline">View Documentation</Button>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 opacity-10 hidden md:block">
          <VolumeIcon className="h-64 w-64 text-primary" />
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Voice Services</h2>
        <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => {
            const Icon = feature.icon
            return (
              <Link key={feature.title} href={feature.href} className="block group">
                <Card className="card h-full transition-all duration-200 overflow-hidden border-border/40 hover:border-primary/40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0 relative">
                    <CardTitle className="text-base font-medium">
                      {feature.title}
                    </CardTitle>
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 relative">
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      <span className="mr-1">Explore</span>
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Getting Started */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Getting Started</h2>
        <div className="card-grid md:grid-cols-2">
          <Card className="shadow-sm overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            <CardHeader>
              <div className="mb-2 p-2 w-fit rounded-full bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
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
              <Button variant="ghost" size="sm" className="mt-4 group/btn px-0">
                <span>View API docs</span>
                <ArrowRightIcon className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-sm overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            <CardHeader>
              <div className="mb-2 p-2 w-fit rounded-full bg-primary/10">
                <MessagesSquare className="h-5 w-5 text-primary" />
              </div>
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
              <Button variant="ghost" size="sm" className="mt-4 group/btn px-0">
                <span>Contact us</span>
                <ArrowRightIcon className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 