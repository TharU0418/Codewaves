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

  
  const handleClick = () => {
    //window.location.href = "/Our-works";
    router.push("/Our-works")
  };

  return (
    <div onClick={handleClick} className={className}>
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40 font-fon1">{children}</div>
    </div>
  );
};
