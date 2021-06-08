import '../static/css/ProgressBar.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  useEffect(() => {
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: 0.3 },
    });
  }, []);

  return (
    <div className='progressbar-container'>
      <progress max='100' value='0'></progress>
    </div>
  );
};

export default ProgressBar;
