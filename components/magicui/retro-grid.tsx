'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, useId } from "react";

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
}

const RetroGrid: FC<RetroGridProps> = ({
  className,
  containerClassName,
  ...props
}) => {
  const id = useId();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        containerClassName,
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          id={id}
        >
          <defs>
            <pattern
              id={`pattern-${id}`}
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <path
                d="M0 64L64 64L64 0"
                fill="none"
                stroke="hsl(var(--primary) / 0.5)"
                strokeWidth="1.5"
              ></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#pattern-${id})`}
            strokeWidth="0"
          ></rect>
        </svg>
      </div>

      {/* Fader */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%"></div>
    </div>
  );
};

export default RetroGrid;
