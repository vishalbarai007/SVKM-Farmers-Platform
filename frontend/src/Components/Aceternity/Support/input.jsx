"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/theme/ThemeContext";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  const context = useContext(ThemeContext);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const themeColors = {
    light: {
      bg: 'bg-gray-100',
      text: 'text-black',
      placeholder: 'placeholder:text-neutral-500',
      border: 'border-neutral-300',
      ring: 'focus-visible:ring-neutral-400'
    },
    dark: {
      bg: 'bg-zinc-800',
      text: 'text-white',
      placeholder: 'placeholder:text-neutral-500',
      border: 'border-neutral-700',
      ring: 'focus-visible:ring-neutral-600'
    }
  };

  const theme = context.theme === 'dark' ? 'dark' : 'light';
  const colors = themeColors[theme];

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        className={cn(
          `flex h-10 w-full border-none 
          ${colors.bg} ${colors.text} ${colors.placeholder} 
          ${colors.border} ${colors.ring}
          shadow-input rounded-md px-3 py-2 text-sm 
          file:border-0 file:bg-transparent
          file:text-sm file:font-medium
          focus-visible:outline-none focus-visible:ring-[2px]
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/input:shadow-none transition duration-400
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };