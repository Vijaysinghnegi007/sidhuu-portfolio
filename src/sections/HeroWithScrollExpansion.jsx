import { useEffect } from 'react';
import { Instagram, Dribbble, Linkedin } from 'lucide-react';
import ScrollExpandMedia from '../components/ui/ScrollExpandMedia';

const HeroWithScrollExpansion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='relative min-h-screen'>
      <div className='absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 text-DarkLava'>
        <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram'>
          <Instagram className='w-7 h-7 hover:text-gold transition-colors' />
        </a>
        <a href='https://dribbble.com' target='_blank' rel='noreferrer' aria-label='Dribbble'>
          <Dribbble className='w-7 h-7 hover:text-gold transition-colors' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
          <Linkedin className='w-7 h-7 hover:text-gold transition-colors' />
        </a>
      </div>

      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='/images/man.png'
        bgImageSrc='https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80'
        title='Siddharth Designer'
        date='Portfolio 2025'
        scrollToExpand='Scroll to Expand'
        textBlend={false}
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-DarkLava font-amiamie'>
            About This Experience
          </h2>
          <p className='text-lg md:text-xl mb-8 text-DarkLava leading-relaxed'>
            Welcome to my portfolio. I'm Siddharth, a passionate graphic designer creating bold,
            modern, and impactful visuals. This immersive scroll experience showcases how
            interactive design can engage and captivate audiences.
          </p>
          <p className='text-lg md:text-xl mb-8 text-SageGray leading-relaxed'>
            The expansion effect you just experienced demonstrates the power of thoughtful
            interaction design. As you scrolled, the image gradually revealed itself,
            creating a sense of discovery and engagement that draws you into the content.
          </p>
          <div className='mt-12 p-8 bg-white/50 rounded-xl border border-DarkLava/10'>
            <h3 className='text-2xl font-bold mb-4 text-DarkLava'>What I Offer</h3>
            <ul className='space-y-3 text-lg text-DarkLava'>
              <li className='flex items-start'>
                <span className='text-gold mr-2'>•</span>
                <span>Brand Identity & Visual Design</span>
              </li>
              <li className='flex items-start'>
                <span className='text-gold mr-2'>•</span>
                <span>Interactive Web Experiences</span>
              </li>
              <li className='flex items-start'>
                <span className='text-gold mr-2'>•</span>
                <span>Motion Graphics & Animation</span>
              </li>
              <li className='flex items-start'>
                <span className='text-gold mr-2'>•</span>
                <span>UI/UX Design Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default HeroWithScrollExpansion;
