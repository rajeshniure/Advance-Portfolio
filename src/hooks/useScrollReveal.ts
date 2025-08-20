import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 900,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      reset: true,
      opacity: 0,
      scale: 1,
      mobile: true,
      cleanup: true,
      viewFactor: 0.15,
    });

    // Home
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 250, interval: 100 });
    sr.reveal('.social_icons', { delay: 300 });
    sr.reveal('.featured-image', { delay: 200 });

    // Headings
    sr.reveal('.top-header', {});

    // Sections & grids
    sr.reveal('.project-box', { interval: 120 });
    sr.reveal('.certification-card', { interval: 120 });
    sr.reveal('.skills-gallery .skills-item', { interval: 80 });

    // Left / Right origins
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '50px',
      duration: 900,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      reset: true,
      opacity: 0,
      scale: 1,
      mobile: true,
      cleanup: true,
      viewFactor: 0.12,
    });
    srLeft.reveal('.about-info', { delay: 120 });
    srLeft.reveal('.contact-info', { delay: 120 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '50px',
      duration: 900,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      reset: true,
      opacity: 0,
      scale: 1,
      mobile: true,
      cleanup: true,
      viewFactor: 0.12,
    });
    srRight.reveal('.skills-gallery', { delay: 100 });
    srRight.reveal('.form-control', { delay: 120 });

    return () => {
      try {
        sr.destroy();
        srLeft.destroy();
        srRight.destroy();
      } catch {}
    };
  }, []);
};

export default useScrollReveal;


