"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
  href?: string;
  text: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function HoverButton({
  href,
  text,
  icon,
  className,
  type = "button",
}: Props) {
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
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
      backgroundColor: className?.includes("button-secondary")
        ? "var(--background)"
        : "var(--primary)",
      color: "var(--primary)",
    });
  };

  const handleHoverEnd = () => {
    setHovering(false);
    controls.start({
      y: 60,
      scale: 0,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
      backgroundColor: className?.includes("button-secondary")
        ? "white"
        : "var(--primary)",
    });
  };

  const shared = (
    <button
      type={type}
      className={`relative overflow-hidden rounded-lg group border-[1px] hover:border-primary ${
        className?.includes("button-secondary")
          ? `hover:bg-primary hover:text-white text-primary`
          : `hover:bg-transparent`
      } transition-[4s] ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        animate={controls}
        initial={{ y: 60, scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className={`absolute left-3 w-12 h-12 rounded-full pointer-events-none ${
          className?.includes("button-secondary") ? "bg-white" : ""
        }`}
      />
      <span className="z-10 flex items-center gap-2">
        <span>{text}</span>
        {icon}
      </span>
    </button>
  );

  return href && type !== "submit" ? <Link href={href}>{shared}</Link> : shared;
}
