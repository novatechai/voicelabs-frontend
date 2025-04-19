import * as React from "react"
import { PhoneCall, Bot, Code, Settings, Building2, BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AICallingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">AI Calling</h1>
        <p className="text-muted-foreground mt-2">
          Create AI agents for automated phone calls and customer service
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Calling Platform</CardTitle>
              <CardDescription>
                Create human-like AI agents that can make and receive phone calls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our AI Calling platform enables you to build conversational AI agents
                that can handle phone calls for appointments, customer service,
                surveys, and more. These agents can understand context, respond naturally,
                and integrate with your existing systems.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4 rounded-md border">
                  <PhoneCall className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Natural Conversations</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    AI agents that sound natural and can handle complex interactions
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-md border">
                  <Bot className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Customizable Agents</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Design agents for your specific use cases with custom voices
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-md border">
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">API Integration</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Connect to your CRM, scheduling software, and other systems
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle>Industries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Healthcare appointment scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Customer service and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Sales and lead qualification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Market research and surveys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Hospitality and reservations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <CardTitle>Benefits</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">24/7 availability without staffing costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Consistent quality for every call</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Scalable to handle peak call volumes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Detailed analytics on every conversation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Multi-language support without additional staff</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Agents</CardTitle>
              <CardDescription>
                Create and manage your AI calling agents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted flex items-center justify-center rounded-md h-[200px] text-muted-foreground">
                <div className="text-center">
                  <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No agents created yet</p>
                  <p className="text-xs mt-2">
                    Create your first AI agent to start making calls
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Bot className="mr-2 h-4 w-4" /> Create New Agent
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Integrate AI calling capabilities into your applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-md p-4 font-mono text-sm">
                <p className="text-primary-foreground mb-2"># Make an outbound AI call</p>
                <p className="mb-4">POST /api/v1/calls</p>
                <p className="text-muted-foreground mb-2">// Request body</p>
                <pre className="text-xs overflow-x-auto">
{`{
  "agent_id": "ag_12345",
  "phone_number": "+15551234567",
  "context": {
    "name": "John Doe",
    "appointment_time": "2023-10-15T14:30:00Z",
    "reason": "Follow-up consultation"
  }
}`}
                </pre>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Code className="mr-2 h-4 w-4" /> View Full Documentation
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" /> Manage API Keys
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 