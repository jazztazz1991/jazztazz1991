import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const STATS = [
  { value: '9+',   label: 'Years Coding' },
  { value: '4',    label: 'Years Teaching' },
  { value: '500+', label: 'Students Mentored' },
  { value: '3',    label: 'Apps Shipped' },
];

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <section id='about' className='portfolio-section'>
      <SectionHeader label='Background' title='About Me' />
      <div className='flex flex-col lg:flex-row lg:items-start gap-12'>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex-1 space-y-5 text-base leading-relaxed'
          style={{ color: 'var(--color-muted)' }}
        >
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>

        {/* Stats grid */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-4 lg:w-72 lg:flex-shrink-0'
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
              viewport={{ once: true }}
              className='theme-panel rounded-xl p-5 text-center'
            >
              <div
                className='text-3xl font-thin font-heading mb-1'
                style={{ color: 'var(--color-accent)' }}
              >
                {stat.value}
              </div>
              <div
                className='text-xs uppercase tracking-widest'
                style={{ color: 'var(--color-muted)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
