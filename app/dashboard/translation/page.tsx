import * as React from "react"
import { Globe, Languages, Headphones, ArrowRightLeft, Mic } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function TranslationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Live Translation</h1>
        <p className="text-muted-foreground mt-2">
          Real-time speech-to-speech translation across multiple languages
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Speech-to-Speech Translation</CardTitle>
          <CardDescription>
            Speak in one language and hear the translation in another language
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="source-language">Speak in</Label>
                <Select defaultValue="en-US">
                  <SelectTrigger id="source-language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Spanish</SelectItem>
                    <SelectItem value="fr-FR">French</SelectItem>
                    <SelectItem value="de-DE">German</SelectItem>
                    <SelectItem value="zh-CN">Chinese (Simplified)</SelectItem>
                    <SelectItem value="ja-JP">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted rounded-md h-40 flex items-center justify-center">
                <div className="text-center">
                  <Mic className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Press the button below to start speaking
                  </p>
                </div>
              </div>

              <Button className="w-full h-12">
                <Mic className="mr-2 h-4 w-4" /> Start Speaking
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="target-language">Translate to</Label>
                <Select defaultValue="es-ES">
                  <SelectTrigger id="target-language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Spanish</SelectItem>
                    <SelectItem value="fr-FR">French</SelectItem>
                    <SelectItem value="de-DE">German</SelectItem>
                    <SelectItem value="zh-CN">Chinese (Simplified)</SelectItem>
                    <SelectItem value="ja-JP">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted rounded-md h-40 flex items-center justify-center">
                <div className="text-center">
                  <Headphones className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Translation audio will play here
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full" disabled>
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Swap Languages
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Supported Languages</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">English</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Spanish</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">French</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">German</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Italian</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Portuguese</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Chinese</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Japanese</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              <CardTitle>Translation Features</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium">Real-time Translation</p>
                <p className="text-xs text-muted-foreground">
                  Translate speech as you speak with minimal delay
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium">Voice Preservation</p>
                <p className="text-xs text-muted-foreground">
                  Option to preserve original voice characteristics in the translation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="text-sm font-medium">Simultaneous Interpretation</p>
                <p className="text-xs text-muted-foreground">
                  Support for multi-participant conversations with different languages
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 