"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const ButtonsCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();

  const handleClick2 = () => {
    
    router.push("mailto:tharushadil11@gmail.com")
    //window.location.href = "/Our-works";
  };

  return (
    <div onClick={handleClick2} className={className}>
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
