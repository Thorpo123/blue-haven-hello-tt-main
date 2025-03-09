
import React, { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";

const Index = () => {
  console.log("Index component rendering");

  useEffect(() => {
    console.log("Index component mounted");
    return () => {
      console.log("Index component unmounted");
    };
  }, []);

  console.log("Index fully rendering content");

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
      <AnimatedBackground />
      
      <header className="fixed top-0 left-0 right-0 p-6 z-10">
        <div className="container max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-blue-600">
            Hello TT
          </h1>
          
          <div className="mt-12 glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-blue-900 text-balance">
              A beautiful, minimalist, and intuitive experience
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
