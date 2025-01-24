import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/theme/ThemeContext";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const context = useContext(ThemeContext);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`absolute inset-0 h-full w-full block ${context.theme === 'dark' ? 'bg-neutral-800/50' : 'bg-green-800/50'} rounded-3xl`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  const context = useContext(ThemeContext);
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full p-4 overflow-hidden 
        ${context.theme === 'dark' ? 'bg-black border-white/[0.2]' : 'bg-white border-gray-200'}
        border group-hover:border-slate-700 relative z-20`,
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  const context = useContext(ThemeContext);
  return (
    <h4 
      className={cn(
        `${context.theme === 'dark' ? 'text-zinc-100' : 'text-black'} 
        font-bold tracking-wide mt-4`, 
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  const context = useContext(ThemeContext);
  return (
    <p
      className={cn(
        `mt-8 ${context.theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'} 
        tracking-wide leading-relaxed text-sm`, 
        className
      )}
    >
      {children}
    </p>
  );
};