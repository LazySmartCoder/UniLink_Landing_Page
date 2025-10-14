'use client';

import { cn } from "@/lib/utils";
import React, { CSSProperties, ReactNode } from "react";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string;
  className?: string;
  children: ReactNode;
}

const ShineBorder = ({
  borderRadius = 12,
  borderWidth = 1,
  duration = 14,
  color = "#f472b6", // accent color
  className,
  children,
}: ShineBorderProps) => {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as CSSProperties
      }
      className={cn(
        "relative rounded-[var(--border-radius)] bg-background text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-radius": `${borderRadius}px`,
            "--border-width": `${borderWidth}px`,
            "--shine-color": color,
            "--shine-duration": `${duration}s`,
          } as CSSProperties
        }
        className="absolute inset-0 rounded-[var(--border-radius)] border-[length:var(--border-width)] [border-image:linear-gradient(to_right,transparent,var(--shine-color),transparent)_1] animate-shine"
      />
      <div className="relative h-full w-full rounded-[var(--border-radius)]">
        {children}
      </div>
    </div>
  );
};

export default ShineBorder;
