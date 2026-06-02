import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/codychase.jpg';
import { motion } from 'framer-motion';

const fade = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <section className='pb-24 pt-4'>
      <div className='flex flex-wrap items-center gap-12 lg:flex-nowrap'>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
          <motion.p
            variants={fade(0)}
            initial='hidden'
            animate='visible'
            className='mb-3 text-xs uppercase tracking-widest'
            style={{ color: 'var(--color-muted)' }}
          >
            Based in Orlando, FL
          </motion.p>
          <motion.h1
            variants={fade(0.1)}
            initial='hidden'
            animate='visible'
            className='pb-4 text-6xl font-thin tracking-tight font-heading lg:text-8xl'
            style={{ color: 'var(--color-text)' }}
          >
            Cody Chase
          </motion.h1>
          <motion.span
            variants={fade(0.2)}
            initial='hidden'
            animate='visible'
            className='gradient-text mb-6 text-3xl tracking-tight'
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={fade(0.3)}
            initial='hidden'
            animate='visible'
            className='mb-10 max-w-xl leading-relaxed'
            style={{ color: 'var(--color-muted)' }}
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={fade(0.4)}
            initial='hidden'
            animate='visible'
            className='flex flex-wrap gap-4'
          >
            <a href='#projects' className='btn-primary'>View Projects</a>
            <a href='#contact' className='btn-ghost'>Get in Touch</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0'
        >
          <div className='hero-photo-frame w-72 lg:w-80'>
            <img
              src={profilePic}
              alt='Cody Chase'
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
