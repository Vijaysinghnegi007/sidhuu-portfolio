import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Instagram, Dribbble, Linkedin } from 'lucide-react';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';

const Hero = () => {
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);

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

  return (
    <div className="relative min-h-screen">
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 text-DarkLava">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram className="w-7 h-7 hover:text-gold transition-colors duration-300" />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">
          <Dribbble className="w-7 h-7 hover:text-gold transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-7 h-7 hover:text-gold transition-colors duration-300" />
        </a>
      </div>

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/man.png"
        bgImageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80"
        title="Siddharth Designer"
        date="Portfolio 2025"
        scrollToExpand="Scroll to Expand"
        textBlend={false}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            ref={textRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-DarkLava font-amiamie"
          >
            Welcome to My Portfolio
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 text-DarkLava leading-relaxed"
          >
            I'm Siddharth, a passionate graphic designer creating bold, modern, and impactful visuals.
            This immersive scroll experience showcases how interactive design can engage and captivate audiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white/50 rounded-xl border border-DarkLava/10 hover:border-gold/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-DarkLava">Brand Identity</h3>
              <p className="text-DarkLava/80">Creating cohesive visual systems that tell your brand's story</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl border border-DarkLava/10 hover:border-gold/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-DarkLava">Interactive Design</h3>
              <p className="text-DarkLava/80">Engaging web experiences that captivate and inspire</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl border border-DarkLava/10 hover:border-gold/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-DarkLava">Motion Graphics</h3>
              <p className="text-DarkLava/80">Bringing designs to life with dynamic animations</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl border border-DarkLava/10 hover:border-gold/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3 text-DarkLava">UI/UX Design</h3>
              <p className="text-DarkLava/80">User-centered solutions that prioritize experience</p>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero;
