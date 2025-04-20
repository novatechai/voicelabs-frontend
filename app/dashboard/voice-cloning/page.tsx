import * as React from "react"
import { Upload, Mic, Headphones, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function VoiceCloningPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Voice Cloning</h1>
        <p className="text-muted-foreground mt-2">
          Create custom voice models with just a few minutes of audio
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create a Voice Clone</CardTitle>
            <CardDescription>
              Upload audio samples or record your voice to create a custom voice model
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <Upload className="h-6 w-6 mb-2" />
                <span>Upload Audio Files</span>
                <span className="text-xs text-muted-foreground mt-1">
                  MP3, WAV, M4A (3-5 minutes recommended)
                </span>
              </Button>

              <Separator>
                <span className="text-xs text-muted-foreground px-2">OR</span>
              </Separator>

              <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                <Mic className="h-6 w-6 mb-2" />
                <span>Record Your Voice</span>
                <span className="text-xs text-muted-foreground mt-1">
                  At least 30 seconds of clear speech
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Voice Models</CardTitle>
            <CardDescription>
              Manage your custom voice models
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-md h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <RefreshCw className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No voice models created yet</p>
                <p className="text-xs mt-2">
                  Create your first voice model using the options on the left
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How Voice Cloning Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">1. Upload Samples</h3>
              <p className="text-sm text-muted-foreground">
                Provide 3-5 minutes of clear audio samples of the voice you want to clone
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">2. AI Processing</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes the audio to create a unique voice model capturing the voice characteristics
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">3. Use Your Clone</h3>
              <p className="text-sm text-muted-foreground">
                Generate speech using your custom voice model with our TTS API
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 