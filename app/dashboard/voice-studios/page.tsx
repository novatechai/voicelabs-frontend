"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  PlayCircle, 
  Code, 
  FileText, 
  Video, 
  Music, 
  Mic, 
  ArrowRight, 
  ExternalLink,
  Copy,
  Volume2,
  ChevronRight,
  Megaphone,
  VideoIcon
} from "lucide-react"

const services = [
  {
    id: "text-to-audio",
    title: "Text-to-Audio (T2A)",
    description: "Generate high-quality audio narration from text prompts",
    icon: FileText,
    color: "from-blue-500/10 to-blue-600/5",
    href: "/dashboard/voice-studios/text-to-audio"
  },
  {
    id: "text-to-music",
    title: "Text-to-Music (T2M)",
    description: "Create music based on textual descriptions and prompts",
    icon: Music,
    color: "from-green-500/10 to-green-600/5",
    href: "/dashboard/voice-studios/text-to-music"
  },
  {
    id: "video-to-audio",
    title: "Video-to-Audio (V2A)",
    description: "Generate audio narration based on video content analysis",
    icon: Video,
    color: "from-purple-500/10 to-purple-600/5",
    href: "/dashboard/voice-studios/video-to-audio"
  },
  {
    id: "video-to-music",
    title: "Video-to-Music (V2M)",
    description: "Create music tracks tailored to match your video content",
    icon: VideoIcon,
    color: "from-amber-500/10 to-amber-600/5",
    href: "/dashboard/voice-studios/video-to-music"
  },
  {
    id: "text-video-to-audio",
    title: "Text+Video-to-Audio (TV2A)",
    description: "Generate audio using both text prompts and video context",
    icon: Megaphone,
    color: "from-red-500/10 to-red-600/5",
    href: "/dashboard/voice-studios/text-video-to-audio"
  },
  {
    id: "text-video-to-music",
    title: "Text+Video-to-Music (TV2M)",
    description: "Create music based on text prompts and video content",
    icon: Volume2,
    color: "from-indigo-500/10 to-indigo-600/5",
    href: "/dashboard/voice-studios/text-video-to-music"
  }
]

const codeExamples = {
  nodejs: `// VoiceLabs Prompt to Audio example
const voicelabs = require('voicelabs-node');
const client = new voicelabs.Client('YOUR_API_KEY');

async function generateAudio() {
  const response = await client.promptToAudio({
    prompt: "Create a cheerful narration for a product introduction",
    voice: "emma", // Choose from available voices
    format: "mp3",
    quality: "high"
  });
  
  console.log(\`Audio generated: \${response.audioUrl}\`);
}

generateAudio();`,

  python: `# VoiceLabs Prompt to Audio example
import voicelabs

client = voicelabs.Client("YOUR_API_KEY")

response = client.prompt_to_audio(
    prompt="Create a cheerful narration for a product introduction",
    voice="emma",  # Choose from available voices
    format="mp3",
    quality="high"
)

print(f"Audio generated: {response.audio_url}")`,

  curl: `curl -X POST https://api.voicelabs.com/v1/audio/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Create a cheerful narration for a product introduction",
    "voice": "emma",
    "format": "mp3",
    "quality": "high"
  }'`
}


export default function VoiceStudiosPage() {
  const [activeTab, setActiveTab] = React.useState("nodejs")
  
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Voice Studios</h1>
        <p className="section-description">
          Our suite of AI-powered voice and audio generation services
        </p>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Available Services</h2>
        <div className="card-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{service.title}</CardTitle>
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  {service.id === "text-to-audio" && "Transform any text prompt into professional audio narration using our AI voice generation."}
                  {service.id === "text-to-music" && "Create custom music tracks from textual descriptions of mood, instruments, and style."}
                  {service.id === "video-to-audio" && "Automatically generate narrative audio that matches your video content and context."}
                  {service.id === "video-to-music" && "Create music tracks that perfectly match the mood and pacing of your video content."}
                  {service.id === "text-video-to-audio" && "Combine video analysis with text prompts for highly customized audio narration."}
                  {service.id === "text-video-to-music" && "Generate music using both your textual guidance and video content analysis."}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={service.href} className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    <span>Try it now</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Compact Demo Video Section */}
      <Card className="w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 aspect-video bg-muted flex items-center justify-center">
            <VideoIcon className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="p-4 md:w-2/3">
            <h3 className="text-lg font-semibold mb-1">Voice Studios Demo</h3>
            <p className="text-sm text-muted-foreground">
              See how our AI voice generation services transform your content creation process,
              from text-to-audio to video-synchronized music.
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </Card>

      {/* API Section */}
      <Card>
        <CardHeader>
          <CardTitle>Voice Studios API</CardTitle>
          <CardDescription>
            Integrate voice and audio generation capabilities into your applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access all Voice Studios services programmatically through our comprehensive API.
            Generate audio from text, create music from descriptions, add narration to videos, and more with simple API calls.
            Perfect for developers looking to add professional audio capabilities to their applications.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 