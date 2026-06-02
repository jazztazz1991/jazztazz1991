import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <section id='about' className='portfolio-section'>
      <SectionHeader label='Background' title='About Me' />
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-2xl space-y-5 text-base leading-relaxed'
        style={{ color: 'var(--color-muted)' }}
      >
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
