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
  Bell,
  LayoutDashboard,
  User,
  Key,
  CreditCard,
  Music,
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
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: "/dashboard/tts",
    label: "Text to Speech",
    icon: Headphones,
    exact: false,
  },
  {
    href: "/dashboard/asr",
    label: "Speech Recognition",
    icon: MicIcon,
    exact: false,
  },
  {
    href: "/dashboard/streaming",
    label: "Streaming Services",
    icon: VolumeIcon,
    exact: false,
  },
  {
    href: "/dashboard/voice-cloning",
    label: "Voice Cloning",
    icon: MicOffIcon,
    exact: false,
  },
  {
    href: "/dashboard/translation",
    label: "Live Translation",
    icon: Languages,
    exact: false,
  },
  {
    href: "/dashboard/ai-calling",
    label: "AI Calling",
    icon: PhoneCall,
    exact: false,
  },
  {
    href: "/dashboard/voice-studios",
    label: "Voice Studios",
    icon: Music,
    exact: false,
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
        <SheetHeader className="border-b p-4 h-[60px] flex flex-row items-center bg-primary/5">
          <SheetTitle asChild>
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold" onClick={handleLinkClick}>
              <VolumeIcon className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">VoiceLabs</span>
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 p-4 text-base font-medium flex-1 overflow-auto">
          {navigationLinks.map((link) => {
            const Icon = link.icon
            const isActive = link.exact 
              ? pathname === link.href 
              : pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-3 py-2.5 transition-all hover:text-primary hover:bg-primary/5",
                  isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
                )}
                onClick={handleLinkClick}
              >
                <div className={cn(
                  "p-1.5 rounded transition-colors",
                  isActive ? "bg-primary/10" : "bg-transparent"
                )}>
                  <Icon className="h-4 w-4" />
                </div>
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
    <Sidebar className="border-r bg-background shadow-md">
      <div className="flex h-full max-h-screen flex-col">
        <SidebarHeader className="flex h-[60px] items-center border-b px-6 bg-primary/5">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <VolumeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl tracking-tight">VoiceLabs</span>
          </Link>
        </SidebarHeader>
        
        <div className="mx-3 my-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full bg-background pl-8 text-sm ring-offset-background focus-visible:ring-primary"
            />
          </div>
        </div>
        
        <SidebarContent className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium gap-1.5">
            {navigationLinks.map((link) => {
              const Icon = link.icon
              const isActive = link.exact 
                ? pathname === link.href 
                : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all hover:text-primary hover:bg-primary/5 group",
                    isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
                  )}
                >
                  <div className={cn(
                    "p-1.5 rounded-md transition-colors",
                    isActive ? "bg-primary/10" : "group-hover:bg-primary/5 bg-transparent"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </SidebarContent>
        
        <SidebarFooter className="mt-auto border-t p-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary p-1.5 rounded-full">
                <CircleUser className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium">User</p>
                <p className="text-xs text-muted-foreground">Free Plan</p>
              </div>
            </div>
            <ModeToggle />
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}

function HeaderBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-[60px] items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 shadow-sm">
      <Button size="icon" variant="outline" className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="hidden md:flex-1 md:block">
        <Breadcrumbs />
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
        <div className="h-6 w-px bg-muted"></div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="rounded-full gap-2 pr-2">
              <div className="bg-primary/10 text-primary rounded-full p-1">
                <CircleUser className="h-5 w-5" />
              </div>
              <span className="font-medium hidden sm:inline-block">User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings/account">
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings/api-keys">
                <Key className="mr-2 h-4 w-4" />
                <span>API Keys</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings/billing">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/support">
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </Link>
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
      <div className="grid min-h-screen w-full md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
        <DesktopSidebar />
        <div className="flex flex-col">
          <HeaderBar onMenuClick={() => setIsMobileMenuOpen(true)} />
          <main className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8 bg-muted/40">
            {children}
          </main>
          <MobileSheetMenu isOpen={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />
        </div>
      </div>
    </SidebarProvider>
  )
} 