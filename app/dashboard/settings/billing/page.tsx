"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  CreditCard as CreditCardIcon, 
  Calendar, 
  Download, 
  ArrowUpRight,
  Sparkles
} from "lucide-react"

export default function BillingPage() {
  const [currentPlan, setCurrentPlan] = useState("free")
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>
        
        {/* Plans Tab */}
        <TabsContent value="plans" className="pt-4 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Free Plan */}
            <Card className={`border-border/40 h-full transition-all duration-200 ${currentPlan === "free" ? "border-primary/50 shadow-md" : ""}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Free</CardTitle>
                  {currentPlan === "free" && (
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                      Current Plan
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>
                  For individuals exploring voice AI capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>100 text-to-speech minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>50 speech recognition minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Basic voice selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={currentPlan === "free" ? "secondary" : "outline"}
                  disabled={currentPlan === "free"}
                >
                  {currentPlan === "free" ? "Current Plan" : "Downgrade"}
                </Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan */}
            <Card className={`border-border/40 h-full transition-all duration-200 ${currentPlan === "pro" ? "border-primary/50 shadow-md" : ""}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Pro</CardTitle>
                  {currentPlan === "pro" && (
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                      Current Plan
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>
                  For professionals requiring more voice capabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>1,000 text-to-speech minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>500 speech recognition minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Advanced voice selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Basic voice cloning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={currentPlan === "pro" ? "secondary" : "default"}
                >
                  {currentPlan === "pro" ? "Current Plan" : currentPlan === "enterprise" ? "Downgrade" : "Upgrade"}
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className={`border-border/40 h-full transition-all duration-200 ${currentPlan === "enterprise" ? "border-primary/50 shadow-md" : ""} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full rotate-12">
                  Popular
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Enterprise</CardTitle>
                  {currentPlan === "enterprise" && (
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                      Current Plan
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>
                  Full-featured solution for businesses and teams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>5,000 text-to-speech minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>2,500 speech recognition minutes/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Premium voice selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Advanced voice cloning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>24/7 phone & email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    <span>Team collaboration features</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={currentPlan === "enterprise" ? "secondary" : "default"}
                >
                  {currentPlan === "enterprise" ? "Current Plan" : "Upgrade"}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="rounded-lg bg-muted p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Need something custom?</h3>
                <p className="text-sm text-muted-foreground">Contact us for custom pricing tailored to your specific requirements.</p>
              </div>
            </div>
            <Button variant="outline" className="whitespace-nowrap">
              Contact Sales <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        {/* Usage Tab */}
        <TabsContent value="usage" className="pt-4 space-y-6">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle>Current Usage</CardTitle>
              <CardDescription>
                Your usage metrics for the current billing period
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span>Text-to-Speech</span>
                  <span className="font-medium">43 / 100 minutes</span>
                </div>
                <Progress value={43} max={100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Resets on November 30, 2023
                </p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span>Speech Recognition</span>
                  <span className="font-medium">27 / 50 minutes</span>
                </div>
                <Progress value={54} max={100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Resets on November 30, 2023
                </p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span>Voice Cloning</span>
                  <span className="font-medium">Not available on Free plan</span>
                </div>
                <Progress value={0} max={100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Upgrade to access Voice Cloning
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle>Usage History</CardTitle>
              <CardDescription>
                Your usage over the last 3 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Text-to-Speech</TableHead>
                    <TableHead>Speech Recognition</TableHead>
                    <TableHead>Voice Cloning</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>November 2023</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>43 min</TableCell>
                    <TableCell>27 min</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>October 2023</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>72 min</TableCell>
                    <TableCell>38 min</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>September 2023</TableCell>
                    <TableCell>Free</TableCell>
                    <TableCell>65 min</TableCell>
                    <TableCell>41 min</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Payment Tab */}
        <TabsContent value="payment" className="pt-4 space-y-6">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment details and billing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-start p-4 border rounded-lg">
                  <div className="flex items-center justify-center bg-primary/10 rounded h-10 w-10 mr-4">
                    <CreditCardIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                      </div>
                      <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10">
                        Default
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <Button className="flex items-center w-full justify-center gap-2" variant="outline">
                  <CreditCardIcon className="h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-base font-medium mb-3">Billing History</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Invoice</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nov 1, 2023</TableCell>
                      <TableCell>$0.00</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10">
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Oct 1, 2023</TableCell>
                      <TableCell>$0.00</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10">
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sep 1, 2023</TableCell>
                      <TableCell>$0.00</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-green-500/50 text-green-500 bg-green-500/10">
                          Paid
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 