import React, { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const navRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Fake loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setHeaderHeight(navRef.current.offsetHeight);
    }
  }, [isReady]);

  return (
    <ReactLenis
      root
      className="relative max-w-[1440px] mx-auto min-h-screen overflow-x-hidden"
    >
      {/* Loading Screen */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main App */}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Navbar with ref */}
        <Navbar ref={navRef} />

        {/* Page Content with dynamic padding */}
        <main style={{ paddingTop: `${headerHeight}px` }}>
          <Hero />
          <Services />
          <About />
          <Works />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
