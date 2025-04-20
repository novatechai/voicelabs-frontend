"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard/settings/account")
  }, [router])

  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        <p className="text-muted-foreground">Redirecting to account settings...</p>
      </div>
    </div>
  )
} 