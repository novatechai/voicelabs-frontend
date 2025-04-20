"use client";

import * as React from "react";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceSaveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  voice: string;
  speed: number;
  pitch: number;
}

export function VoiceSaveButton({
  className,
  text,
  voice,
  speed,
  pitch,
  ...props
}: VoiceSaveButtonProps) {
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Placeholder for actual save logic
      console.log("Saving audio with:", { text, voice, speed, pitch });
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      toast.success("Audio saved successfully!");
    } catch (error) {
      console.error("Failed to save audio:", error);
      toast.error("Failed to save audio. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className={cn(className)}
      onClick={handleSave}
      disabled={isSaving || !text}
      {...props}
    >
      {isSaving ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Save className="mr-2 h-4 w-4" />
      )}
      {isSaving ? "Saving..." : "Save Audio"}
    </Button>
  );
} 