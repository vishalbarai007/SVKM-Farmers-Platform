"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/theme/ThemeContext";
import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => {
  const context = useContext(ThemeContext);

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        `text-sm font-medium ${context.theme === 'dark' ? 'text-white' : 'text-black'} leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
        className
      )}
      {...props}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };