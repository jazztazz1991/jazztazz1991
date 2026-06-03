import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section id='contact' className='pb-32'>
      <SectionHeader label='Say Hello' title='Get In Touch' />
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-lg'
      >
        <p
          className='mb-8 leading-relaxed'
          style={{ color: 'var(--color-muted)' }}
        >
          Whether you've got a project idea, want to talk code, or just want to connect — my inbox is open.
        </p>
        <div className='space-y-4 text-sm' style={{ color: 'var(--color-muted)' }}>
          <p className='flex items-center gap-3'>
            <FaMapMarkerAlt style={{ color: 'var(--color-accent)' }} />
            {CONTACT.address}
          </p>
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\D/g, '')}`}
            className='flex items-center gap-3 transition-colors duration-200'
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            <FaPhone style={{ color: 'var(--color-accent)' }} />
            {CONTACT.phoneNo}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className='flex items-center gap-3 transition-colors duration-200'
            style={{ color: 'var(--color-accent)' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span style={{ color: 'var(--color-accent)', fontSize: '1rem' }}>✉</span>
            {CONTACT.email}
          </a>
          <a
            href='https://www.linkedin.com/in/jazztazz/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-3 transition-colors duration-200'
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            <FaLinkedin style={{ color: 'var(--color-accent)', fontSize: '1rem' }} />
            linkedin.com/in/jazztazz
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
