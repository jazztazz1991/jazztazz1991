import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Experience = () => {
  return (
    <section id='experience' className='portfolio-section'>
      <SectionHeader label='History' title='Experience' />
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='w-full lg:w-1/4'
            >
              <p
                className='mb-2 text-sm font-mono'
                style={{ color: 'var(--color-muted)' }}
              >
                {exp.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6
                className='mb-2 font-semibold font-heading'
                style={{ color: 'var(--color-text)' }}
              >
                {exp.role}{' '}
                <span
                  className='text-sm font-normal'
                  style={{ color: 'var(--color-accent)' }}
                >
                  @ {exp.company}
                </span>
              </h6>
              <p
                className='mb-4 text-sm leading-relaxed'
                style={{ color: 'var(--color-muted)' }}
              >
                {exp.description}
              </p>
              {exp.technologies.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className='tech-badge'>{tech}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
