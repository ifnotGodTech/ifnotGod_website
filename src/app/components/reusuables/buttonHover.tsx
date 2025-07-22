"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
  href: string;
  text: string;
  icon?: ReactNode;
  className?: string;
};
export default function HoverButton({ href, text, icon, className }: Props) {
  const controls = useAnimation();
  const [hovering, setHovering] = useState(false);
  console.log(hovering)
  const handleHoverStart = () => {
    setHovering(true);
    controls.start({
      y: -60,
      z: 400,
      scale: 1.5,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
      backgroundColor: "#ffffff",
      color: "var(primary)",
    });
  };

  const handleHoverEnd = () => {
    setHovering(false);
    controls.start({
      y: 60,
      scale: 0,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeIn" },
      backgroundColor: "var(primary)",
    });
  };

  return (
    <Link href={href}>
      <button
        className={`relative overflow-hidden rounded-lg group border-[1px] hover:border-primary hover:bg-white transition-[4s] ${className}`}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          animate={controls}
          initial={{ y: 60, scale: 0.5, opacity: 0 }}
          className={`absolute left-3 w-12 h-12 ${
            className?.includes("button-secondary") ? `bg-primary` : `bg-white`
          } rounded-full pointer-events-none`}
        />
        <span className="z-10 flex items-center gap-2">
          <span>{text}</span>
          {icon}
        </span>
      </button>
    </Link>
  );
}
