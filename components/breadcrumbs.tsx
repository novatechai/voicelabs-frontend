"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper function to capitalize the first letter of a string
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Helper function to format path segments (e.g., 'voice-cloning' -> 'Voice Cloning')
const formatSegment = (segment: string) => {
  return segment
    .split('-')
    .map(capitalize)
    .join(' ');
};

export function Breadcrumbs({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean); // Remove empty strings from split

  // If on the root dashboard page, just show "Dashboard"
  if (segments.length === 1 && segments[0] === "dashboard") {
    return (
      <nav aria-label="Breadcrumb" className={cn("text-sm", className)} {...props}>
        <ol className="flex items-center">
          <li className="flex items-center">
            <span className="font-medium text-foreground flex items-center">
              <Home className="h-4 w-4 mr-1" /> Dashboard
            </span>
          </li>
        </ol>
      </nav>
    );
  }

  // For other pages, build the breadcrumb trail
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)} {...props}>
      <ol className="flex items-center space-x-1.5">
        <li className="flex items-center">
          <Link 
            href="/dashboard" 
            className="hover:text-foreground transition-colors flex items-center text-primary/70 hover:text-primary"
          >
            <Home className="h-4 w-4 mr-1" /> Dashboard
          </Link>
        </li>
        {segments.slice(1).map((segment, index) => {
          const isLast = index === segments.slice(1).length - 1;
          const href = '/' + segments.slice(0, index + 2).join('/');
          
          return (
            <React.Fragment key={href}>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/70" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-medium text-foreground">{formatSegment(segment)}</span>
                ) : (
                  <Link 
                    href={href} 
                    className="hover:text-foreground transition-colors text-primary/70 hover:text-primary"
                  >
                    {formatSegment(segment)}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
} 