import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Instagram, Dribbble, Linkedin } from 'lucide-react';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP intro animations
  useEffect(() => {
    if (textRef.current && subtitleRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
    }
  }, []);

  // Wheel & touch scroll handling
  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Content fade in/out
  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: showContent ? 1 : 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  }, [showContent]);

  const mediaWidth = 300 + scrollProgress * 800;
  const mediaHeight = 400 + scrollProgress * 300;

  return (
    <div className="bg-[#e8e8e3] overflow-x-hidden transition-colors duration-700">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Social Media Icons */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 text-gray-700">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              <Dribbble className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Expanding Image */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                }}
              >
                <img
                  src="/images/man.png"
                  alt="Siddharth Portrait"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <h1
                  ref={textRef}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
                >
                  Siddharth
                </h1>
                <h2
                  ref={subtitleRef}
                  className="text-2xl md:text-3xl text-gray-600 mt-4"
                >
                  Graphic Designer
                </h2>
              </div>
            </div>

            {/* Expanded Section */}
            <section
              ref={contentRef}
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 opacity-0"
            >
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Welcome to my portfolio. I’m Siddharth, a passionate graphic
                designer creating bold, modern, and impactful visuals. Scroll to
                explore my work.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
