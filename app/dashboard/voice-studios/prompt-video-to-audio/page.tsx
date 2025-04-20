import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Download, Upload, Video, Wand2 } from "lucide-react";


export default function PromptVideoToAudioPage() {
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Prompt + Video to Audio</h1>
        <p className="section-description">
          Create contextual audio narration based on video content and prompts
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Audio for Video</CardTitle>
              <CardDescription>
                Upload a video and provide prompts for AI-generated narration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-md border-muted-foreground/20 p-10 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop your video file here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports MP4, MOV, AVI (up to 500MB)
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Select File
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">Narration Prompt</label>
                <textarea
                  id="prompt"
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe the style, tone, and content you want for the narration. Example: 'Create a documentary-style narration that explains what's happening in the video with an enthusiastic tone.'"
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
                      <SelectItem value="documentary">Documentary</SelectItem>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
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
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="narration-density" className="text-sm font-medium">Narration Density</label>
                  <Select>
                    <SelectTrigger id="narration-density">
                      <SelectValue placeholder="Select density" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal - Key moments only</SelectItem>
                      <SelectItem value="moderate">Moderate - Regular narration</SelectItem>
                      <SelectItem value="detailed">Detailed - Comprehensive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="speed" className="text-sm font-medium">Speaking Speed</label>
                <Slider id="speed" defaultValue={[100]} min={80} max={120} step={5} />
              </div>
              
              <Button className="w-full">
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Smart Narration
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Preview your video with AI-generated narration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Video className="h-8 w-8 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground text-center px-4">
                    Your video preview will appear here after processing
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <h3 className="text-sm font-medium">Generated Narration Script</h3>
                <div className="bg-muted rounded-md p-3 text-xs h-24 overflow-y-auto">
                  <p className="text-muted-foreground">
                    AI-generated narration script will appear here after processing...
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full" disabled>
                  Download Video with Narration
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download Narration Script
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Add AI-powered contextual narration to videos programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Prompt + Video to Audio service through our API.
            Upload videos, specify narration prompts, and let our AI generate contextual
            narration based on both your instructions and video content analysis.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 