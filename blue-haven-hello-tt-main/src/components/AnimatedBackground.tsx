
import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-blue.500/40 to-blue-600/30"
        aria-hidden="true"
      />
      <div className="absolute inset-0">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-3xl animate-floating" />
        <div className="absolute top-[10%] right-[5%] w-[50%] h-[60%] rounded-full bg-blue-200/30 blur-3xl animate-floating delay-300" />
        <div className="absolute bottom-[5%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-3xl animate-floating delay-100" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
