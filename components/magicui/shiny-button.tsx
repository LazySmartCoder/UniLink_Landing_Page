"use client";

import * as React from "react";
import clsx from "clsx"; // or use cn() if your project uses that helper

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyButton({
  children,
  className,
  ...props
}: ShinyButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "relative overflow-hidden rounded-lg px-8 py-3 font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-lg transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        className
      )}
    >
      {children}
    </button>
  );
}
