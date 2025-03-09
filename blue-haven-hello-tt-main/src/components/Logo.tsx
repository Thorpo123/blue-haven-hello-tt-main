
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="text-blue-500 font-bold text-3xl">TT</span>
    </div>
  );
};

export default Logo;
