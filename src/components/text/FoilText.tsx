import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FoilTextProps = {
  children: ReactNode;
  className?: string;
};

export function FoilText({ children, className }: FoilTextProps) {
  return (
    <span className={cn("relative inline-flex items-center overflow-hidden", className)}>
      <span className="brand-wordmark-gradient">{children}</span>
      <span aria-hidden="true" className="brand-wordmark-shimmer" />
    </span>
  );
}