import React from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div {...props} className={cn("container", className)}>
      {children}
    </div>
  );
}
