"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { User, Key, CreditCard } from "lucide-react"

const settingsNav = [
  {
    title: "Account",
    href: "/dashboard/settings/account",
    icon: User,
  },
  {
    title: "API Keys",
    href: "/dashboard/settings/api-keys",
    icon: Key,
  },
  {
    title: "Billing",
    href: "/dashboard/settings/billing",
    icon: CreditCard,
  },
]

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="section-title">Settings</h1>
        <p className="section-description">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <Card className="shrink-0 md:w-64 border-border/40">
          <div className="p-1">
            <nav className="grid gap-1 p-2">
              {settingsNav.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all hover:text-primary hover:bg-primary/5 group",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    <div className={cn(
                      "p-1 rounded-md transition-colors",
                      isActive ? "bg-primary/10" : "group-hover:bg-primary/5 bg-transparent"
                    )}>
                      <Icon className="h-4 w-4" />
                    </div>
                    {item.title}
                  </Link>
                )
              })}
            </nav>
          </div>
        </Card>
        
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  )
} 