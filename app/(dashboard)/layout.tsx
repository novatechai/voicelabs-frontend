"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  MicIcon,
  Headphones,
  VolumeIcon,
  MicOffIcon,
  Languages,
  PhoneCall,
  Menu,
  Settings,
  LifeBuoy,
  LogOut,
  Search,
  CircleUser,
} from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { cn } from "@/lib/utils"

const navigationLinks = [
  {
    href: "/tts",
    label: "Text to Speech",
    icon: Headphones,
  },
  {
    href: "/asr",
    label: "Speech Recognition",
    icon: MicIcon,
  },
  {
    href: "/streaming",
    label: "Streaming Services",
    icon: VolumeIcon,
  },
  {
    href: "/voice-cloning",
    label: "Voice Cloning",
    icon: MicOffIcon,
  },
  {
    href: "/translation",
    label: "Live Translation",
    icon: Languages,
  },
  {
    href: "/ai-calling",
    label: "AI Calling",
    icon: PhoneCall,
  },
]

function MobileSheetMenu({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname()
  const handleLinkClick = () => onOpenChange(false)

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex flex-col p-0 w-full max-w-xs sm:max-w-sm">
        <SheetHeader className="border-b p-4 h-[60px] flex flex-row items-center">
          <SheetTitle asChild>
            <Link href="/" className="flex items-center gap-2 font-semibold" onClick={handleLinkClick}>
              <VolumeIcon className="h-6 w-6 text-primary" />
              <span>VoiceLabs</span>
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 p-4 text-base font-medium flex-1 overflow-auto">
          {navigationLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-3 py-2.5 transition-all hover:text-primary",
                  isActive ? "bg-muted text-primary font-medium" : "text-muted-foreground"
                )}
                onClick={handleLinkClick}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t p-4 flex items-center justify-between">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}

function DesktopSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r bg-background shadow-sm">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarHeader className="flex h-[60px] items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <VolumeIcon className="h-6 w-6 text-primary" />
            <span>VoiceLabs</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="flex-1 overflow-auto py-4">
          <nav className="grid items-start px-4 text-sm font-medium gap-1">
            {navigationLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "sidebar-link",
                    isActive && "active"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </SidebarContent>
        <SidebarFooter className="mt-auto border-t p-4 flex justify-center">
          <ModeToggle />
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}

function HeaderBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-[60px] items-center gap-4 border-b bg-background px-4 md:px-6 sticky top-0 z-30 shadow-sm">
      <Button size="icon" variant="outline" className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="hidden md:flex-1">
        <Breadcrumbs />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DesktopSidebar />
        <div className="flex flex-col">
          <HeaderBar onMenuClick={() => setIsMobileMenuOpen(true)} />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 main-content-padding bg-muted/40">
            {children}
          </main>
          <MobileSheetMenu isOpen={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />
        </div>
      </div>
    </SidebarProvider>
  )
} 