import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <section id='education' className='portfolio-section'>
      <SectionHeader label='Credentials' title='Education' />
      <div>
        {EDUCATION.map((item, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm font-mono' style={{ color: 'var(--color-muted)' }}>
                {item.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-1 font-semibold font-heading' style={{ color: 'var(--color-text)' }}>
                {item.degree}
              </h6>
              <p className='text-sm mb-1' style={{ color: 'var(--color-accent)' }}>
                {item.school} · {item.location}
              </p>
              {item.note && (
                <p className='text-xs italic' style={{ color: 'var(--color-muted)' }}>
                  {item.note}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
