import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, Video, Volume2 } from "lucide-react";


export default function AudioForVideoPage() {
  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="section-title">Audio for Video</h1>
        <p className="section-description">
          Add professional voice narration to your videos
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload Video</CardTitle>
              <CardDescription>
                Upload your video and configure voice settings
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
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="voice" className="text-sm font-medium">Voice</label>
                  <Select>
                    <SelectTrigger id="voice">
                      <SelectValue placeholder="Select voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male1">Male Voice 1</SelectItem>
                      <SelectItem value="male2">Male Voice 2</SelectItem>
                      <SelectItem value="female1">Female Voice 1</SelectItem>
                      <SelectItem value="female2">Female Voice 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
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
              </div>
              
              <div className="space-y-2">
                <label htmlFor="script" className="text-sm font-medium">Narration Script</label>
                <textarea
                  id="script"
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter the script to be narrated in your video..."
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="background-music" className="text-sm font-medium">Background Music</label>
                <Select>
                  <SelectTrigger id="background-music">
                    <SelectValue placeholder="Select background music (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Background Music</SelectItem>
                    <SelectItem value="ambient">Ambient</SelectItem>
                    <SelectItem value="upbeat">Upbeat</SelectItem>
                    <SelectItem value="dramatic">Dramatic</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="music-volume" className="text-sm font-medium">Music Volume</label>
                <Slider id="music-volume" defaultValue={[30]} min={0} max={100} step={1} />
              </div>
              
              <Button className="w-full">
                <Volume2 className="mr-2 h-4 w-4" />
                Generate Audio for Video
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Preview your video with added narration
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
              
              <div className="space-y-2">
                <label htmlFor="preview-volume" className="text-sm font-medium">Preview Volume</label>
                <Slider id="preview-volume" defaultValue={[75]} min={0} max={100} step={1} />
              </div>
              
              <Button variant="outline" className="w-full" disabled>
                Download Video with Narration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
          <CardDescription>
            Add AI-powered narration to videos programmatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Access our Audio for Video service programmatically through our API.
            Upload videos, specify scripts and voice settings, and receive narrated videos automatically.
          </p>
          <Button variant="outline" className="mt-4">
            View API Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 