import { cn } from "@/lib/utils";
import React from "react";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'], // Specify the necessary subsets
  weight: ['300', '400', '500', '600', '700'], // Specify desired weights or remove for variable font
  display: 'swap', // Recommended for better loading experience
});

const AndroidMockup = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-neutral-900 bg-neutral-900 dark:border-neutral-800 dark:bg-neutral-800",
        className,
      )}
    >
      <div className="absolute -left-1.5 top-24 h-16 w-1 rounded-l-lg bg-neutral-800 dark:bg-neutral-600"></div>
      <div className="absolute -left-1.5 top-44 h-16 w-1 rounded-l-lg bg-neutral-800 dark:bg-neutral-600"></div>
      <div className="absolute -right-1.5 top-32 h-24 w-1 rounded-r-lg bg-neutral-800 dark:bg-neutral-600"></div>
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-background">
        <div className="h-full w-full bg-gradient-to-b from-[#6A1B9A] to-[#6A1B9A]">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <img src="/logo.png" className="h-32 w-32" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidMockup;
