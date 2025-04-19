"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MicIcon, Headphones, VolumeIcon, MicOffIcon, Languages, PhoneCall, Menu } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [isMobileView, setIsMobileView] = React.useState(false)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const navigationLinks = [
    {
      href: "/tts",
      label: "Text to Speech",
      icon: <Headphones className="h-5 w-5" />
    },
    {
      href: "/asr",
      label: "Speech Recognition",
      icon: <MicIcon className="h-5 w-5" />
    },
    {
      href: "/streaming",
      label: "Streaming Services",
      icon: <VolumeIcon className="h-5 w-5" />
    },
    {
      href: "/voice-cloning",
      label: "Voice Cloning",
      icon: <MicOffIcon className="h-5 w-5" />
    },
    {
      href: "/translation",
      label: "Live Translation",
      icon: <Languages className="h-5 w-5" />
    },
    {
      href: "/ai-calling",
      label: "AI Calling",
      icon: <PhoneCall className="h-5 w-5" />
    }
  ]

  const renderNavigationLinks = () => (
    <SidebarMenu className="mt-4">
      {navigationLinks.map((link) => (
        <SidebarMenuItem key={link.href} className="mb-1">
          <Link href={link.href} className="w-full">
            <SidebarMenuButton
              isActive={pathname === link.href}
              tooltip={link.label}
            >
              <div className="mr-3">{link.icon}</div>
              {link.label}
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )

  const renderMobileSidebar = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden fixed z-50 top-4 left-4">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[280px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <VolumeIcon className="h-6 w-6" />
              <span>VoiceLabs</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-4">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                <div className="mr-3">{link.icon}</div>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t p-4 flex items-center justify-between">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <>
      {isMobileView && renderMobileSidebar()}
      <SidebarProvider defaultOpen>
        <div className="flex h-screen overflow-hidden">
          <Sidebar className="hidden md:block">
            <SidebarHeader className="flex h-16 items-center border-b px-6">
              <Link href="/" className="flex items-center gap-3 font-semibold">
                <VolumeIcon className="h-6 w-6" />
                <span className="text-lg">VoiceLabs</span>
              </Link>
            </SidebarHeader>
            <SidebarContent className="px-2">
              {renderNavigationLinks()}
            </SidebarContent>
            <SidebarFooter className="flex items-center justify-between border-t p-4">
              <ModeToggle />
              <SidebarTrigger className="mr-1" />
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pt-16 md:pt-6 page-container">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </>
  )
} 