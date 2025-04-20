"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Key, Copy, Plus, AlertTriangle, CheckCircle, Trash2, Eye, EyeOff } from "lucide-react"

// Generate a random API key
const generateApiKey = () => {
  const prefix = "vl_"
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = prefix
  
  for (let i = 0; i < 32; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return result
}

export default function ApiKeys() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [newKey, setNewKey] = useState<string | null>(null)
  const [keyName, setKeyName] = useState("")
  const [keyScope, setKeyScope] = useState("read")
  const [apiKeys, setApiKeys] = useState([
    { 
      id: 1, 
      name: "Production API Key", 
      prefix: "vl_H7xK...Pz3A", 
      scope: "full", 
      createdAt: "2023-09-15", 
      lastUsed: "2 hours ago" 
    },
    { 
      id: 2, 
      name: "Development API Key", 
      prefix: "vl_L9jB...Rn5C", 
      scope: "read", 
      createdAt: "2023-10-20", 
      lastUsed: "1 day ago" 
    }
  ])
  const [revealedKeys, setRevealedKeys] = useState<Record<number, boolean>>({})
  
  const handleGenerateKey = () => {
    if (!keyName.trim()) return
    
    setIsGenerating(true)
    
    // Simulate API call with a small delay
    setTimeout(() => {
      const generatedKey = generateApiKey()
      setNewKey(generatedKey)
      setIsGenerating(false)
      
      // Add to keys list
      setApiKeys([
        ...apiKeys,
        {
          id: Date.now(),
          name: keyName,
          prefix: `${generatedKey.substring(0, 6)}...${generatedKey.substring(generatedKey.length - 4)}`,
          scope: keyScope,
          createdAt: new Date().toISOString().split('T')[0],
          lastUsed: "Just now"
        }
      ])
      
      // Reset form
      setKeyName("")
      setKeyScope("read")
    }, 800)
  }
  
  const handleCopyKey = () => {
    if (newKey) {
      navigator.clipboard.writeText(newKey)
    }
  }
  
  const handleRevealKey = (id: number) => {
    setRevealedKeys(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  const handleRevokeKey = (id: number) => {
    setApiKeys(apiKeys.filter(key => key.id !== id))
  }
  
  return (
    <div className="space-y-6">
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Create and manage API keys for authenticating with the VoiceLabs API
          </CardDescription>
        </CardHeader>
        <CardContent>
          {newKey && (
            <Alert className="mb-6 border-green-500/50 bg-green-500/10">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-500">API Key Generated</AlertTitle>
              <AlertDescription className="mt-1 text-muted-foreground">
                <div className="font-mono text-xs bg-background p-2 rounded border mb-2 flex items-center justify-between">
                  {newKey}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleCopyKey}
                    className="h-6 w-6 ml-2 text-muted-foreground"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <AlertTriangle className="inline-block h-3.5 w-3.5 mr-1 text-amber-500" />
                  Make sure to copy your API key as you won't be able to see it again!
                </p>
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-[1fr_160px_120px]">
              <div className="grid gap-1.5">
                <Label htmlFor="keyName">Key Name</Label>
                <Input 
                  id="keyName" 
                  placeholder="e.g. Production API Key" 
                  value={keyName}
                  onChange={(e) => setKeyName(e.target.value)}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="scope">Scope</Label>
                <Select 
                  value={keyScope} 
                  onValueChange={setKeyScope}
                >
                  <SelectTrigger id="scope">
                    <SelectValue placeholder="Select scope" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="read">Read Only</SelectItem>
                    <SelectItem value="write">Write Only</SelectItem>
                    <SelectItem value="full">Full Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label className="opacity-0">Generate</Label>
                <Button 
                  onClick={handleGenerateKey} 
                  disabled={isGenerating || !keyName.trim()}
                >
                  {isGenerating ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                      Generating
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Generate Key
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {apiKeys.length > 0 && (
              <div className="mt-6 rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Scope</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Used</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apiKeys.map((key) => (
                      <TableRow key={key.id}>
                        <TableCell className="font-medium">{key.name}</TableCell>
                        <TableCell className="font-mono text-xs">
                          {revealedKeys[key.id] ? generateApiKey() : key.prefix}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              key.scope === "full" 
                                ? "border-green-500/50 text-green-500 bg-green-500/10" 
                                : key.scope === "write" 
                                ? "border-amber-500/50 text-amber-500 bg-amber-500/10" 
                                : "border-blue-500/50 text-blue-500 bg-blue-500/10"
                            }
                          >
                            {key.scope === "full" ? "Full Access" : key.scope === "write" ? "Write Only" : "Read Only"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{key.createdAt}</TableCell>
                        <TableCell className="text-muted-foreground">{key.lastUsed}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleRevealKey(key.id)}
                            >
                              {revealedKeys[key.id] ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                              <span className="sr-only">Reveal Key</span>
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Revoke API Key</DialogTitle>
                                  <DialogDescription>
                                    Are you sure you want to revoke this API key? This action cannot be undone.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <Button variant="outline">Cancel</Button>
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleRevokeKey(key.id)}
                                  >
                                    Revoke Key
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>
            Learn how to integrate VoiceLabs API into your applications
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1 h-auto py-4 px-4">
            <div className="flex flex-col items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <span>API Reference</span>
              <span className="text-xs text-muted-foreground">Comprehensive API documentation</span>
            </div>
          </Button>
          <Button variant="outline" className="flex-1 h-auto py-4 px-4">
            <div className="flex flex-col items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <span>Code Examples</span>
              <span className="text-xs text-muted-foreground">Sample code in various languages</span>
            </div>
          </Button>
          <Button variant="outline" className="flex-1 h-auto py-4 px-4">
            <div className="flex flex-col items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <span>SDKs</span>
              <span className="text-xs text-muted-foreground">Client libraries for easy integration</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 